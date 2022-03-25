/*
문제 설명
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다.
ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 
각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

NAME	               TYPE	        NULLABLE
ANIMAL_ID	          VARCHAR(N)	  FALSE
ANIMAL_TYPE	        VARCHAR(N)	  FALSE
DATETIME	          DATETIME	    FALSE
INTAKE_CONDITION	  VARCHAR(N)	  FALSE
NAME	              VARCHAR(N)	  TRUE
SEX_UPON_INTAKE     VARCHAR(N)	  FALSE

동물 보호소에 들어온 동물 중 고양이와 개가 각각 몇 마리인지 조회하는 SQL문을 작성해주세요.
이때 고양이를 개보다 먼저 조회해주세요.
*/
-- 코드를 입력하세요
SELECT ANIMAL_TYPE, count(ANIMAL_TYPE) as 'count' from ANIMAL_INS GROUP BY ANIMAL_TYPE order by ANIMAL_TYPE ASC
/*
이렇게 유형별로 갯수를 알고 싶을 때는 컬럼에 데이터를 그룹화 할 수 있는 GROUP BY를 사용가능하다.

컬럼 그룹화
SELECT 컬럼 FROM 테이블 GROUP BY 그룹화할 컬럼;

조건 처리 후에 컬럼 그룹화
SELECT 컬럼 FROM 테이블 WHERE 조건식 GROUP BY 그룹화할 컬럼;

컬럼 그룹화 후에 조건 처리
SELECT 컬럼 FROM 테이블 GROUP BY 그룹화할 컬럼 HAVING 조건식;


조건 처리 후에 컬럼 그룹화 후에 조건 처리
SELECT 컬럼 FROM 테이블 WHERE 조건식 GROUP BY 그룹화할 컬럼 HAVING 조건식;


ORDER BY가 존재하는 경우
SELECT 컬럼 FROM 테이블 [WHERE 조건식]
GROUP BY 그룹화할 컬럼 [HAVING 조건식] ORDER BY 컬럼1 [, 컬럼2, 컬럼3 ...];
*/
