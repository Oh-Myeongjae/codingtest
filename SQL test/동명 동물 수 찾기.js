/*
문제 설명
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다.
ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 
각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

NAME	                  TYPE	    NULLABLE
ANIMAL_ID	            VARCHAR(N)	  FALSE
ANIMAL_TYPE	          VARCHAR(N)	  FALSE
DATETIME	            DATETIME	    FALSE
INTAKE_CONDITION	    VARCHAR(N)	  FALSE
NAME	                VARCHAR(N)	  TRUE
SEX_UPON_INTAKE	      VARCHAR(N)	  FALSE

동물 보호소에 들어온 동물 이름 중 두 번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하는 SQL문을 작성해주세요.
이때 결과는 이름이 없는 동물은 집계에서 제외하며, 결과는 이름 순으로 조회해주세요.
*/
-- 코드를 입력하세요
SELECT NAME,count(NAME) as 'COUNT' from ANIMAL_INS group by NAME having COUNT>=2 order by NAME
/*
조건을 처리할때는 where와 having이 있다. 이둘의 차이는 
where는 그룹화나  조회하기전에 조건에 부합하는지 체크를 하는거고
having은 그룹화로 조회한이후에 조건에 부합하는지 체크를 하는것이다.
이둘의 가장큰차이는 조건에 부합하는지 언제 체크를 하느냐라고 할수있다.
*/
