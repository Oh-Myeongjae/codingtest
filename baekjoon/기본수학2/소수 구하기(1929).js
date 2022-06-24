/*
문제
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

출력
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
*/
const fs = require('fs');
let input = fs.readFileSync(0, 'utf8').toString().trim().split(' ').map(Number);
const func = (num)=>{
    if(num === 1)return false;
    let half = Math.sqrt(num);
    
    for(let i=2;i<=half;i++){
        if(num%i === 0)return false;
    }
    
    return true;
}
let A = input[0];
let B = input[1];
let arr = [];

for(let i=A;i<=B;i++){
    if(func(i))arr.push(i);
}
console.log(arr.join('\n'));
