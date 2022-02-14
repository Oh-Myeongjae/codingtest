/*
문제 설명
앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

예를들면, 문자열 s가 "abcdcba"이면 7을 return하고 "abacde"이면 3을 return합니다.

제한사항
문자열 s의 길이 : 2,500 이하의 자연수
문자열 s는 알파벳 소문자로만 구성
*/
function solution(s){
    var answer = 0;
    const check = (ch)=>{
        if(ch.length <= 1) return true
        if(ch[0] === ch[ch.length-1]){
            return check(ch.slice(1,ch.length-1))
        }
    }

    for(let i=0;i<s.length;i++){
        let num = s.length-i
        for(let j=0;j<=i;j++){
            let str = s.slice(j,j+num)
            //console.log('str',str)
            if(check(str)){
                // console.log('wow')
                answer = str.length
                break;
            }
        }
        if(answer !== 0){
            break;
        }
    }
  
    return answer;
}
