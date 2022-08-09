package test;

import java.util.*;

public class test {
	 public String solution(int[] nums) {
		 	/*
		 	 *			Hash / Tree
		 	 * 			Map / Set
		 	 * 
		 	 * 
		 	 * Hash -> 순서가 유지되지 않음
		 	 * Tree -> 정렬순서가 유지
		 	 * 
		 	 * 
		 	 * Map -> <key:value>로 존재 ---> Map<"포켓몬","파이리">
		 	 * set  -> value만 존재 ---> Set<"파이리"> ---> 가장 큰 특징 : 중복이 없음
		 	 * 
		 	 * 
		 	 * HashMap -> 순서가 유지되지 않는 <key:value>로 존재
		 	 * HashSet -> 순서가 유지되지 않는 중복이 없는 <value>로 존재
		 	 * 
		 	 * 
		 	 * TreeMap -> 정렬순서가 유지되는 <key:value>로 존재 ---> 키값으로 정렬기준
		 	 * TreeSet -> 정렬순서가 유지되는 중복이 없는 <value>로 존재
		 	 */	 
	      
	        HashMap<String, Integer> hashmap = new HashMap<>();
	        
	        System.out.print("hashmap에 추가하는 숫자 : ");
	        for (int i = 0; i < 10; i++) {
	            String key = i+"번";
	            Integer value = i;
	            hashmap.put(key, value);
	            System.out.print(i+" ");
	        }
	        System.out.println();
	        System.out.println("HashMap : "+hashmap);
	        System.out.println();
	        
	      //------------------------------------- 
	        
	        HashSet<String> hashSet = new HashSet<String>();
	        System.out.print("hashSet에 추가하는 숫자 : ");
	        for(int i=0;i<10;i++) {
	        	int n = (int)(Math.random()*10)+1;
	        	hashSet.add(n+"번");
	        	System.out.print(n+" ");
	        }
	        System.out.println();
	        System.out.println("HashSet : "+hashSet);
	        
	        System.out.println();
	      
	        //-------------------------------------
	        
	        TreeMap<String, Integer> treeMap = new TreeMap<String, Integer>();
	        treeMap.put("파이리",1);
	        treeMap.put("꼬부기",1);
	        treeMap.put("이상해씨",1);
	        System.out.println("treeMap : "+ treeMap);
	        
	        //---------------------------------------------------------------
	       
	        TreeMap<Integer, String> treeMap1 = new TreeMap<Integer, String>();
	        treeMap1.put(1,"파이리");
	        treeMap1.put(2,"꼬부기");
	        treeMap1.put(3,"이상해씨");
	        System.out.println("treeMap1 : "+ treeMap1);
	        
	        System.out.println();
	        
	      //---------------------------------------------------------------
	        TreeSet<Integer> treeSet = new TreeSet<Integer>();
	    	
	        System.out.print("TreeSet에 추가하는 숫자 : ");
	        for(int i=0;i<10;i++) {
	        	int n = (int)(Math.random()*10)+1;
	        	treeSet.add(n);
	        	System.out.print(n+" ");
	        }
	        System.out.println();
	        System.out.println("treeSet : "+treeSet);
	        
	        
	        String answer = "";
	        return answer;
	    }	
	
	    public static void main(String[] args) {
	    	test test1 = new test();
	        System.out.println(test1.solution(new int[]{3,3,3,2,2,4}));
	    }
	}
