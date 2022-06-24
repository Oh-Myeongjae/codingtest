/*
문제
정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.

출력
N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.
*/
const fs = require('fs');
let input = fs.readFileSync(0, 'utf8').toString().trim();
const func = (num)=>{
    let half = Math.sqrt(num);
    
    for(let i=2;i<=half;i++){
        if(num%i === 0)return i;
    }
    
    return num;
}
let num = Number(input);
if(num === 1)return;
let arr = [];
let half = Math.sqrt(num);
let result = '';

while(num != 1){
    let prime = func(num);
    arr.push(prime);
      num /= prime;
      }
result = arr.sort((a,b)=>a-b).join('\n');
console.log(result);
