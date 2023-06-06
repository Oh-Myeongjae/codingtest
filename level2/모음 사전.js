/*
문제 설명
사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다.
사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.

단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.

제한사항
word의 길이는 1 이상 5 이하입니다.
word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.
*/
function solution(word) {
    var answer = 0;
    let check = true;
    let ch = ['A','E','I','O','U']
    const func = (now)=>{
        for(let i=0;i<ch.length;i++){
            answer++
            if(now+ch[i] === word){
                check = false
                return
            }
            if(now.length < 4){
              func(now+ch[i])
              if(!check) return
            }
        }
}
    func('')
    return answer;
}
/*
(java)

총 5+25+125+625+3125= 3905개 인데,

가장 먼저, 각 알파벳으로 시작할 수 있는 단어는 각각 781개

=> a로 시작하는 단어는 781개

그렇다면 e로 시작하는 단어는 앞에 a로 시작하는 단어 뒤에 나올테니까 적어도 781 다음부터 겠죠?

​

자릿수에 따라 781 / 156 / 31 / 6 / 1 이므로, 주어진 word를 한글자씩 쪼개서 자릿수 별로 answer에 더해주면 됩니다.

public int solution(String word) {
        int answer = 0, per = 3905;
        for(String s : word.split("")) answer += "AEIOU".indexOf(s) * (per /= 5) + 1;
        return answer;
    }
*/
