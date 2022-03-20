/*
문제 설명
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다.
ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 
각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

NAME	                TYPE	        NULLABLE
ANIMAL_ID	          VARCHAR(N)	      FALSE
ANIMAL_TYPE         VARCHAR(N)	      FALSE
DATETIME	          DATETIME	        FALSE
INTAKE_CONDITION	  VARCHAR(N)	      FALSE
NAME	              VARCHAR(N)	      TRUE
SEX_UPON_INTAKE	    VARCHAR(N)	      FALSE
가장 최근에 들어온 동물은 언제 들어왔는지 조회하는 SQL 문을 작성해주세요.
*/

-- 코드를 입력하세요
SELECT max(datetime) as '시간' from animal_ins;

// max를 이용하여 원하는 컬런에서 최대값을 구할수 있다. 이를 다른 방법으로는
// SELECT DATETIME as '시간' from ANIMAL_INS order by DATETIME desc limit 1
//으로도 같은 결과를 구할수가 있으나 훨씬 간결하게 사용할수 있게되었다.
