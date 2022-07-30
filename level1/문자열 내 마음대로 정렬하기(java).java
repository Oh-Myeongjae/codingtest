/*
문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
*/
import java.util.*;

class Solution {
     public String[] solution(String[] strings, int n) { 
        for(int i=0;i<strings.length;i++) {
            strings[i] = strings[i].charAt(n)+strings[i];
        }

        Arrays.sort(strings);

        for(int i=0;i<strings.length;i++) {
            strings[i] = strings[i].substring(1);
        }

        return strings;
    }
}

//    for(int i=0;i<strings.length;i++) {
//         	strings[i] = strings[i].charAt(n)+strings[i];
//         }
        
//         Arrays.sort(strings);
        
//         for(int i=0;i<strings.length;i++) {
//         	strings[i] = strings[i].substring(1);
//         }
        
//         return strings;

-------------------------------------------------------------------------------

//    List<String> answer = new ArrayList<String>();
// 		Set<Character> set = new HashSet<Character>();
		
// 		for(String s: strings) {
// 			set.add(s.charAt(n));
// 		}
		
// 		List<Character> cList = new ArrayList(set);
// 		Collections.sort(cList);
		
// 		for(char c : cList) {
// 			List<String> temp = new ArrayList<String>();
			
// 			for(String str: strings) {
// 				if( str.charAt(n) == c )temp.add(str);
// 			}
            
// 			Collections.sort(temp);

// 			for(String s : temp){
// 				answer.add(s);
// 			}
// 		}		
		
//         return answer.toArray(new String[0]);  

-------------------------------------------------------------------------
  
 // Arrays.sort(strings, new Comparator<String>(){
 //          @Override
 //          public int compare(String s1, String s2){
 //              if(s1.charAt(n) > s2.charAt(n)) return 1;
 //              else if(s1.charAt(n) == s2.charAt(n)) return s1.compareTo(s2);
 //              else if(s1.charAt(n) < s2.charAt(n)) return -1;
 //              else return 0;
 //          }
 //      });
 //      return strings;

-----------------------------------------------------------------------

//     Arrays.sort(strings);
//     Arrays.sort(strings, (s1,s2)->s1.charAt(n)-s2.charAt(n)); 
// return strings;   
	
/*
문제를 어떻게 이해하는가에 따라서 다양하게 생각해서 풀수 있는 문제였던거 같다.

1번풀이는 로직적인 부분보다 문제에 대해서 창의적으로 생각한 방식이고
2번풀이는 모두다 사전식 정리지만 조금더 다른방식으로 접근해서 풀었던것 같다.
3번풀이는 Comparator객체를 이용해서 풀어본 문제이다. Comparator객체안에 compare을 오버라이드로 재정의해서 문제에서 요구한 로직적인 부분순서로 구현을 했다.
4번풀이는 비교객체를 사용하되 창의적으로 문제에 접근해서 해결했다. 대단하다...
*/
