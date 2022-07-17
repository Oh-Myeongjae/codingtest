
class Solution {
    public String solution(String new_id) {
        String answer = "";
        String make = new_id;
        make = make.toLowerCase()   //1단계
            .replaceAll("[^a-z0-9-_.]", "") //2단계
            .replaceAll("\\.+", ".")    //3단계
            .replaceAll("^\\.|\\.$", "")    //4단계
            .replaceAll("^$", "a");     //5단계        
        if(make.length()>=16){
            make = make.substring(0,15).replaceAll("\\.$", "");     //6단계        
        } 
        
        if(make.length() <= 2) {
        	String temp = make.substring(make.length()-1);
        	make  += temp.repeat(3-make.length());    //7단계
        }

        answer = make;
        return answer;
    }
}
/*
같은 문제를 지난번에는 자바스크립트로 해결했지만 이번에는 자바를 이용해서 해결하였고
위와같은 방식으로 해결하기 위해서 정규식에 대해서 알아보게 되었다.
진짜 정규식은 문자열을 다루는데 코드를 정말 혁신적으로 줄여주는것같다.
기본적인 사용법을 익혔지만 익숙해 지기까지는 쪼금더 많은 연습이 필요할것 같다.
*/
