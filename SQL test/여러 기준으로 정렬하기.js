/*
문제 설명
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다.
ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는
각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

NAME	              TYPE	      NULLABLE
ANIMAL_ID	        VARCHAR(N)	    FALSE
ANIMAL_TYPE	      VARCHAR(N)	    FALSE
DATETIME	        DATETIME	      FALSE
INTAKE_CONDITION	VARCHAR(N)	    FALSE
NAME	            VARCHAR(N)	    TRUE
SEX_UPON_INTAKE	  VARCHAR(N)	    FALSE

동물 보호소에 들어온 모든 동물의 아이디와 이름, 보호 시작일을 이름 순으로 조회하는 SQL문을 작성해주세요. 
단, 이름이 같은 동물 중에서는 보호를 나중에 시작한 동물을 먼저 보여줘야 합니다.
*/
SELECT ANIMAL_ID,NAME,DATETIME from ANIMAL_INS order by NAME ASC, DATETIME DESC;
//찾는 조건이 여러개일경우는 where절에 and,or 연산자로 가능하고 정렬의조건이 여러개일경우 order by뒤에 기준이 되는 컬럼을 차례로 적어주면
//처음컬럼조건으로 정렬하고 이후에 같은것은 2번째 컬럼조건으로 정렬하게 된다
