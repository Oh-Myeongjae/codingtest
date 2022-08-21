/*
문제 설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
*/
class Solution {
    public int solution(int n) {
        int answer = 0;
        String convert = "";		//값을 더해주기 위한 빈 문자열 선언
        while (n > 0) {
        	convert += (n % 3);	//문자열의 앞에 n을 2로 나눴을 때의 나머지를 더해준다.
        	n /= 3;		//다음 턴을 위해 n을 2로 나눠준다.
        }
        answer = Integer.parseInt(convert,3);
        return answer;
    }
}
