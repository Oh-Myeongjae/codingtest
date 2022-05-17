/*
문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.
*/
const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').trim().toString().split('\n');

let num = 0;
let result = '';

for(let i=0;i<inputData.length;i++){
    let number = inputData[i].split(' ');
    let A = Number(number[0]);
    let B = Number(number[1]);
    result += `${A+B}\n`;
}

console.log(result)
