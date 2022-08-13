/*
문제 설명
정수 배열 numbers가 주어집니다.
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/
import java.util.*;

class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        int[] arr = new int[200];
        Arrays.fill(arr, 0);
        for(int i = 0;i<numbers.length;i++) {
        	int num = numbers[i];
        	for(int j = 0;j<numbers.length;j++) {
        		if(i ==j)continue;
        		arr[num+numbers[j]] = 1;
        	}
        }
        List<Integer> list  = new ArrayList<Integer>();
        for(int i=0;i<arr.length;i++) {
        	if(arr[i]==1)list.add(i);
        }
        answer = list.stream().mapToInt(Integer::new).toArray();
        return answer;
    }
/*
중복과 오름차순을 해결하기 위해서 배열을 미리 만들어 놓고 인덱스로 접근하는 방식을 사용했는데
Set을 이용하면 중복이 사라진다는걸 이용해서 set을 이용한후 정렬을 했어도 코드도 더 깔끔하고 정리가 잘될꺼 같다.
*/
 package test;

import java.util.*;

public class test {
	public int[] solution(int[] numbers) {
        TreeSet<Integer> set = new TreeSet<Integer>();
        for(int i=0;i<numbers.length;i++) {
        	for(int j=0;j<numbers.length;j++) {
            	if(j == i)continue;
            	set.add(numbers[i]+numbers[j]);
            }
        }          
        return set.stream().mapToInt(i->i).toArray();
    }
	
	    public static void main(String[] args) {
	    	test test1 = new test();
	        System.out.println(test1.solution(new int[]{5,0,2,7}));
	    }
	}
	
//이후에 TreeSet을 이용해서 다시 풀어 보았는데 역시나 코드의 단축을 많이 이루어 낼수 있었다.
