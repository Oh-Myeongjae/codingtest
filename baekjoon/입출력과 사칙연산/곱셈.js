/*
문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
        472----1
    x   385----2
    ------------
         2360----3
        3776-----4
       1416------5
    ------------
    181720-------6


(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
*/
const fs = require('fs');
const sc = fs.readFileSync('/dev/stdin').toString().split('\n')

const num1 = sc[0]
const num2 = sc[1].split('')

const fir = parseInt(num1)*parseInt(num2[2])
const mid = parseInt(num1)*parseInt(num2[1])
const end = parseInt(num1)*parseInt(num2[0])
const result = fir + (mid*10) + (end*100)

console.log(fir)
console.log(mid)
console.log(end)
console.log(result)
