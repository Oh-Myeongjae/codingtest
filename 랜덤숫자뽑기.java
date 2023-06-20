package test;

import java.util.*;


public class test {
		public void solution() {
			HashMap<Integer, ArrayList<Integer>> map = new HashMap<Integer, ArrayList<Integer>>();
			map.put(0, new ArrayList<Integer>());
			map.put(1, new ArrayList<Integer>());
			map.put(2, new ArrayList<Integer>());

			boolean arr[] = new boolean[51];
			Arrays.fill(arr, true);
			int count = 0;
			while(count<50) {
					int random1 = (int)(Math.random()*3);
					int random2 = (int)(Math.random()*50)+1;
					ArrayList<Integer> list = map.get(random1);
					if(list.size()>=17)continue;
					if(arr[random2] && !list.contains(random2)) {
						list.add(random2);
						arr[random2] = false;
						count++;
					}
				}
			for(int s : map.keySet()) {
				String name = s ==0 ? "우열" : (s==1 ? "원용" : "우열");
				ArrayList<Integer> list = map.get(s);
				Collections.sort(list);
				System.out.println(name+" : "+map.get(s) + " , 사이즈 : "+map.get(s).size());
				}
			}
	    public static void main(String[] args) {
	    	test test1 = new test();
	        test1.solution();
	    }
	}
/*
===================================================================================================================
50개의 숫자중 임의숫자를 중복없이 부여하는 코드입니다.
내기를 하거나 할일 부여할때 사용가능합니다.
*/
