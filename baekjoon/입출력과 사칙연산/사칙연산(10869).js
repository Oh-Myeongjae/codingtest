/*
문제
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

입력
두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

출력
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
*/
const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = Number(inputData[0])
const B = Number(inputData[1])

console.log(A+B)
console.log(A-B)
console.log(A*B)
console.log(Math.floor(A/B))
console.log(A%B)
/*
JavaScript는 느슨한 타입(loosely typed)의 동적(dynamic) 언어이기 때문에 
JavaScript의 변수는 어떤 특정 타입과 연결되지 않으며
모든 타입의 값으로 할당 (및 재할당) 가능하다는 특징이 있다.

그렇기 때문에 기존의 연산문제들과 크게 다른것은 없었으나 나눗셈을할때 딱나누어 떨어지는 경우가 아니라 나머지가 남는경우 문제가 될수있다.

문제의 예시출력을 보면 자연수 나누기 자연수의 값으로 자연수의 몫만을 원하고 있다는 것을 알수있다.
하지만 자바스크립트로 단순히 나누기를 하게되면 소수의 값을 반환후에 재할당하게 되므로 나온결과물을 정수화 해주는 작업을 한번더 해주어야 하겠다.
*/
