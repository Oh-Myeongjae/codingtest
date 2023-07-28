/*
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

--제한 조건--
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

*/
function solution(a, b) {
    var answer = '';
    let arr = []
    
    for(let i=0;i<Number(a)-1;i++){
        arr.push(i+1)
    }
    
    let c = [1,3,5,7,8,10,12]
    let d = [4,6,9,11]
    
    let sum = 0
    
    for(let el of arr){
        if(c.includes(el)){
            sum += 31
        }else if(d.includes(el)){
            sum += 30
        }else{
            sum += 29
        }
    }
    sum += Number(b)
    let day = ['THU','FRI','SAT','SUN','MON','TUE','WED']
    
    answer = day[sum%7]
    return answer;
}
/*
(java)
class Solution {
     public String solution(int a, int b) {
        String answer = "";
        int sum = 0;    // 2016년 1월 0일 부터 현재날짜 까지 얼마나 됐는지 일(day)로 변환
        
        String[] days = {"THU","FRI","SAT","SUN","MON","TUE","WED"};
        int[] month = new int[]{0,31,29,31,30,31,30,31,31,30,31,30,31};
        
        //a달 직전 달까지 일수를 구하고 현재 a달의 날짜인 b만큼을 더함
        for (int i = 1; i <a ; i++) {
            sum += month[i];
        }
        sum += b;
        
        //sum%7 --> 일주일마다 요일은 똑같기 때문에 7로 나눠서 나머지 만큼 요일을 이동해주면 현재 요일이 나온다 
        answer = days[sum % 7];
        return answer;
    }
}
*/
