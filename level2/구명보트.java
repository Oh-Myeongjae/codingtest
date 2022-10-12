/*
문제 설명
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 
2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때,
모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

제한사항
무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
*/
import java.util.*;

class Solution {
  public int solution(int[] people, int limit) {
        int answer = 0;
        int count = people.length;
        Arrays.sort(people);
        int min = 0;
        for(int i = people.length-1; i>=min; i--) {
        	int firstWeight = people[min];
        	int lastWeight = people[i];
        	if(firstWeight+lastWeight <=limit) {
        		min++;
        	}
        	answer++;
        }
        return answer;
   }
}
/*
public int solution(int[] people, int limit) {
        int answer = 0;
        int count = people.length;
//        Arrays.sort(people);
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int x : people)list.add(x);
        Collections.sort(list);
	      while(!list.isEmpty()) {
	    	int firstWeight = list.get(0);
	    	int lastWeight = list.get(list.size()-1);
	    	
	    	if(firstWeight+lastWeight<=limit) {
	    		list.remove(0);
	    	}
	    	if(!list.isEmpty())list.remove(list.size()-1);
	    	answer++;
	    }
        return answer;
   }
   
   ==========================================================================================================================
   public int solution(int[] people, int limit) {
        int answer = 0;
        int count = people.length;
        //Arrays.sort(people);
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int x : people)list.add(x);
        Collections.sort(list);
        int max = list.size()-1;
        int min = 0;
	      while(count>0) {
	    	if(list.get(max)+list.get(min)<=limit) {
	    		min++;
          count--;
	    	}
          max--;
	    	  count--;
	    	  answer++;
	    }
        return answer;
   }
   
   ==========================================================================================================================
   
   최초에 리스트를 이용해서 문제해결을 시도 했는데 시간 초과 에러가 발생했다.
   하지만 이때 Collections.sort(list);의 방식을 Arrays.sort(people); 이후에 리스트에 추가만 하는 식으로 변했는데 통과가 되었다.
   검색을 해보았더니 두개의 정렬 방식의 차이로 대부분 Collections.sort()가 더 시간복잡도가 적게 사용되나 
   Arrays.sort()는 Dual-Pivot Quicksort를 사용하는데 Quick sort는 배열에서 좋은 성능을 보인다는 내용을 보았는데 이런부분이 적용된거 같다.
   
   하지만 원초적인 문제는 list의 remove하는 부분에서 가장 앞요소를 삭제하면서 나머지 요소가 앞쪽으로 한칸씩 이동하는 로직이 실행되면서 시간초과가 계속되었던것이다.
   비슷하게 리스트를 사용했지만 요소를 지우지 않고 비교하는 요소의 위치를 변화시키며 지정하는 식으로 구현하였더니 해결되었다.
*/
