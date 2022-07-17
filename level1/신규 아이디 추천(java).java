
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
