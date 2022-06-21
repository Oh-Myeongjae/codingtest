/*
문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)

출력
첫째 줄에 A+B를 출력한다.
*/
const fs = require('fs');
let input = fs.readFileSync(0, 'utf8').toString().trim().split(' ');
let a = BigInt(input[0]);
let b = BigInt(input[1]);
let num = a+b;

console.log(num.toString());
