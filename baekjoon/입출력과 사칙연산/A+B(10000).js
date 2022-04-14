/*
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
*/
const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);
/*
file system 모듈을 불러온다.
const fs = require('fs'); 

fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
예) 2 3 입력시, inputData = ['2', '3']
const inputData1 = fs.readFileSync('/dev/stdin').toString().split(' ');
*/
