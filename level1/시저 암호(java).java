/*
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
*/
class Solution {
    public String solution(String s, int n) {
       String answer = "";
	   	//한글자씩 아스키코드 값으로 확인하기 위해서 character타입의 배열로 변환
	        char[] ch = s.toCharArray();
	  
	        for(char c : ch) {
			//공백문자는 그대로 더해주기
	        	if(c == ' ') {
	        		answer += c;
	        		continue;
	        	}
			//일단은 n의 값만큼 문자를 밀기
	        	int num = c+n;        	
	        	if((c>='a' && c<='z' && num>'z') || num>'Z') num-= 26;      	
	        	answer += (char)num;
	        }
	        return answer;
    }
}
