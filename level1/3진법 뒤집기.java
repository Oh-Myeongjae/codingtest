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
