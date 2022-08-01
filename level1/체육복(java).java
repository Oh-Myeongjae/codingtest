/*
문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
*/
package test;

import java.util.*;

public class test {
	public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        // 모두 체육복을 한벌씩 가지고 있다고 가정
        int[] arr = new int[n+2];
        Arrays.fill(arr, 1);
        System.out.println("arr배열의 초기화 : "+Arrays.toString(arr));
        
        //잃어버린 학생은 체육복 개수를 하나씩 빼주기
        for(int x : lost) {
        	arr[x] -= 1;
        }
        
        //여벌있는 학생은 체육복 개수를 하나씩 더하기
        for(int x : reserve) {
        	arr[x] += 1;
        }
        
        System.out.println("실제 체육복을 빌려줄수 있는 학생 : "+Arrays.toString(arr));   

        /*
         * 실제 학생은 1번학생부터 이므로 1번 인덱스 부터 확인한다.
         * 이때 여벌옷이 있는 학생은 앞뒤에 학생을 보면서 체육복이 없는 학생에게 빌려주는데 
         * 무조건 앞에있는 학생 부터 빌려준다. 
         * [1,0,2,0,2,0,2,1] 이런 경우가 있을때 앞에 있는 학생에게 먼저 빌려준다면
         * [1,1,1,1,1,1,1,1] 이렇게 빌려줄수 있지만 뒤에있는 학생에게 먼저 빌려준다면
         * [1,0,1,1,1,1,2,1] 이렇게 빌려줄수있다. 둘의 차이는 1번학생에게 빌려줄수 없는 상황이 생긴다.
         * 따라서 무조건 앞의 학생에게 먼저 빌려줘야 하는 로직으로 구성해야한다.
         */
        for(int i = 1; i<arr.length-1; i++) {
        	if(arr[i]==2) {
        		arr[i] -= 1;
        		if(arr[i-1] == 0)arr[i-1] += 1;
        		else if(arr[i+1] == 0) arr[i+1] += 1;
        	}
        }
        
        System.out.println("빌려줄수 있는 경우 모두 빌려주었을때 : "+Arrays.toString(arr));
        
        for(int i=1;i<arr.length-1;i++) {
        	if(arr[i]>=1)answer++;
        }
        
        return answer;   
    }
	
	    public static void main(String[] args) {
	    	test test1 = new test();
	        System.out.println(test1.solution(5, new int[]{2,4}, new int[]{1,3,5}));
	    }
	}

