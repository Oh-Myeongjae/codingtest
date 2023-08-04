/*
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
*/
function solution(participant, completion) {
    var answer = '';
     participant.sort()
     completion.sort()
    
    for(let i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            answer = participant[i]
            return answer
        }
    }

}
//해쉬라는것을 이용하여 풀면 성능을 반정도 개선가능하나
//아직은 개념을 잘모르기때문에 조금더 공부해서 도전해 보도록 해야겠다
/*
(java)
import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        HashMap<String,Integer> map = new HashMap<>();
        for (String s : completion) {
            map.put(s,0);
        }
        for (String s : participant) {
            if(map.remove(s) == null){
                answer = s;
                break;
            }
        }        
        if(completion.length == 0)answer = participant[0];
        return answer;
    }
}
*/
