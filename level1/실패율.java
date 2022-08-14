/*
슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 
그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 
원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 
역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 
오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 
게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

제한사항
스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
stages의 길이는 1 이상 200,000 이하이다.
stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
*/
package test;

import java.util.*;

public class test {
	  public int[] solution(int N, int[] stages) {
	        int[] answer = new int[N];
	        
	        //총사람수
	        int n = stages.length;

	        
	        //모두 0으로 초기화 후에 stages를 돌면서 해당 층에 도전하고 있는 사람수를 구한다.
	        double[] fail = new double[N+1];
	        Arrays.fill(fail, 0);	        
	        for(int x : stages) {
	        	if(!(x>N))fail[x]++;
	        }
	        System.out.println("스테이지별로 도전하고 있는 사람수 : "+ Arrays.toString(fail));
	        
	       /*
	        * 실패율을 구하는 공식 : 스테이지에 도전하는 사람수 / 스테이지에 도달한 사람수
	        * 이때 스테이지에 도달한 인원이 0명이면  오류가 발생할수 있다.
	        * 예시) {1,2,3,0,0} -> 4,5 스테이지는 아직 아무도 도달을 안했기때문에  
	        * 도전하는 사람도 0명, 도달한 사람도 0명이라 0/0이되어서 오류가 발생한다.
	        * 따라서 그런경우 실패율은 0.0으로 고정해줘야 한다.
	        */
	        TreeSet<Double> set = new TreeSet<Double>(); //실패율의 종류를 모아서 정렬하기 위한 set
	        for(int i=1;i<=N;i++) {
	        	int temp = (int)fail[i];
	        	double convert = n<=0 ? 0.0 : fail[i]/n;
	        	fail[i] = convert;
	        	set.add(convert);
        	    n -= temp;    
	        }
	        set = (TreeSet<Double>)set.descendingSet();
	  
	        System.out.println("스테이지별 실패율 : "+ Arrays.toString(fail));
	        System.out.println("실패율이 높은것부터 정렬 : "+ set);
	        
	        int idx = 0; //answer에 실패율이 높은것부터 넣어주기 위한 인덱스로 사용
	        
	        while(set.size()>0) {
	        	double use = set.first();
	        	System.out.println("비교할 실패율 : "+use);
	        	
	        	for(int i=1;i<fail.length;i++) {
	        		if(fail[i] == use){
	        			answer[idx] = i;
	        			idx++;
	        		}
	        	}
        		set.remove(use);
        		System.out.println("비교한 실패율 버린후 : "+set);
	        }      
	        	System.out.println("answer : "+ Arrays.toString(answer));	        	
	        return answer;
	    }
	
	    public static void main(String[] args) {
	    	test test1 = new test();
	        System.out.println(test1.solution(5,new int[]{2, 1, 2, 6, 2, 4, 3, 3}));
	    }
	}
//조금 더 코드 리팩토링으로 최적화 시킬 방법이 있을것 같은데 어떻게 될지 한번 확인해 봐야하는 상황일꺼 같다.
