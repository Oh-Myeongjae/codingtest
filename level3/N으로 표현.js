/*
문제 설명
아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5

5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

제한사항
N은 1 이상 9 이하입니다.
number는 1 이상 32,000 이하입니다.
수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
최솟값이 8보다 크면 -1을 return 합니다.
*/
function solution(N, number) {
    var answer = 0;
    let arr =[[N]]
    if(number === arr[0][0])return 1
    for(let i=2;i<=8;i++){
       //console.log('arr',arr)
        let temp = []
        let middle = i/2-1
        let str = ''+N
        str = parseInt(str.repeat(i))
        if(str === number)return i
        for(let k=0;k<=middle;k++){
            if(k===middle){
                arr[k].map((x)=>{arr[k].map((y)=>{
                    if(!temp.includes(x+y) && x+y>=1)temp.push(x+y)
                    if(!temp.includes(x-y) && x-y>=1)temp.push(x-y)
                    if(!temp.includes(x*y) && x*y>=1)temp.push(x*y)
                    if(!temp.includes(x/y) && x/y>=1)temp.push(parseInt(x/y))
                })})
            }else{
                arr[k].map((x)=>{arr[arr.length-1-k].map((y)=>{
                   if(!temp.includes(x+y) && x+y>=1)temp.push(x+y)
                   if(!temp.includes(x-y) && x-y>=1)temp.push(x-y)
                   if(!temp.includes(x*y) && x*y>=1)temp.push(x*y)
                   if(!temp.includes(x/y) && x/y>=1)temp.push(parseInt(x/y))
                   if(!temp.includes(y-x) && y-x>=1)temp.push(y-x)
                   if(!temp.includes(y/x) && y/x>=1)temp.push(parseInt(y/x))
                })})
            }
        }
        temp.push(str)
        if(temp.includes(number)) answer = i
        if(answer !== 0) break;
        arr.push(temp)
    }
    if(answer === 0) answer = -1;
    return answer;
}
