/*
문제
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

출력
주어진 수들 중 소수의 개수를 출력한다.
*/
const fs = require('fs');
let input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const func = (num)=>{
    let check = true;
    let half = Math.sqrt(num)
    for(let i=2;i<=half;i++){
        if(num%i === 0){
            check = false;
            break;
        }
    }
    if(num === 1){
      check = false;  
    }
    return check;
}

let count = 0;

for(let el of input[1].split(' ').map(Number)){
    if(func(el)){
     count++;   
    }
}
console.log(count);
