/*
문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
*/
class Solution {
    boolean isPrime(int number) {
        if(number<2) return false;
        
         double sqrt = Math.sqrt(number);
         
         for(int i=2;i<=sqrt;i++) {
             if(number%i == 0) return false;
         }
         return true;
     }
    
    public int solution(int n) {
          int answer = 0;
            for(int i=1;i<=n;i++) {
                if(isPrime(i))answer++;
            }
            return answer;
    }
}
//----------------------------------------------------------------------------------------------------
class Solution {
    public int solution(int n) {
            int answer = 0;
            boolean[] arr = new boolean[n+1];
            Arrays.fill(arr, true);
            for(int i=2;i<=n;i++) {
                if(arr[i]) {
                    answer++;
                    int temp = i*2;
                    while (temp<=n) {
                        arr[temp] = false;
                        temp +=i;
                    }
                }
            }
            return answer;
        }
}
