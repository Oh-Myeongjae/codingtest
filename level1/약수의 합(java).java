/*
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/
class Solution {
    public int solution(int n) {
        int answer = 0;
        double sqrt = Math.sqrt(n);
         
        for(int i=1;i<=sqrt;i++) {
            if(n%i == 0) {
                answer += i;
                if(i!=sqrt) answer += n/i;   
            }
        }
        
        return answer;
    }
}
