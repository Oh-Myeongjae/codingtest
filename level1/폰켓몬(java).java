/*
문제 설명
당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다.
홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다. 
예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
두 번째(1번), 세 번째(2번) 폰켓몬을 선택
두 번째(1번), 네 번째(3번) 폰켓몬을 선택
세 번째(2번), 네 번째(3번) 폰켓몬을 선택

이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만,
다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.
당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다.
N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.
*/
package test;

import java.util.*;

public class test {
	 public int solution(int[] nums) {
	        int answer = 0;
	        int count = nums.length/2;
	       
	        
	        List<Integer> list = new ArrayList<Integer>(); 
	          
	        for(int num : nums) {
	        	if(!list.contains(num))list.add(num);
	        }
	        
	        if(count<=list.size()){
	        	answer = count;
	        }else {
	        	answer = list.size();
	        }	        
	        return answer;
	    }	
	
	    public static void main(String[] args) {
	    	test test1 = new test();
	        System.out.println(test1.solution(new int[]{3,3,3,2,2,4}));
	    }
	}
//=============================================================================

package test;

import java.util.*;

public class test {
	 public int solution(String[] nums) {
		    System.out.println("문제에서 주어진 포켓몬 : "+Arrays.toString(nums));
	        int answer = 0;
	        int count = nums.length/2;        
	        HashMap<String, Integer> hashMap = new HashMap<String, Integer>();
	        
	        for(String mon : nums) {
	        	if(hashMap.get(mon) == null) {
	        		hashMap.put(mon, 1);
	        	}else {
	        		int value = hashMap.get(mon);
	        		hashMap.put(mon, value+1);
	        	}
	        }
	        
	        Set<String> set =  hashMap.keySet();
	      	        
	        if(count<=set.size()){
	        	answer = count;
	        }else {
	        	answer = set.size();
	        }	        
	        
	        return answer;
	    }	
	
	    public static void main(String[] args) {
	    	test test1 = new test();
	        System.out.println(test1.solution(new String[]{"이상해씨","이상해씨","파이리","이상해씨","파이리","꼬부기"}));
	    }
	}
//===================================================================================
package test;

import java.util.*;

public class test {
		public int solution(int[] nums) {
		    HashSet<Integer> hashSet = new HashSet<Integer>();  
		    for(int num :nums) {hashSet.add(num);}
		        
		    return Math.min(nums.length/2, hashSet.size());
		}	
	
	    public static void main(String[] args) {
	    	test test1 = new test();
	        System.out.println(test1.solution(new int[]{3,3,3,2,2,4}));
	    }
	}

//==============================================================================
