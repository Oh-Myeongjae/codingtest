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
}
