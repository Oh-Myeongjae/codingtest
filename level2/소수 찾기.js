/*
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 
흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
 
각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 
종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
*/
const func = (num)=>{
    if(num <= 1)return false
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i === 0){
            return false
        }
    }
    return true
}

function solution(numbers) {
var answer = 0;
let arr = []
let list = []
 
const listFunc = (now,char)=>{
    if(now.length === 0){
       if(!list.includes(char)){
           list.push(char)
       }
        return
    }
    for(let i=0;i<now.length;i++){
       let str1 = char + now[i]        
       if(!list.includes(char)){
           list.push(char)
       }
       let temp = now.slice(0,i).concat(now.slice(i+1))
       listFunc(temp,str1)
    }
}
listFunc(numbers.split(''),'')
for(let el of list){
    let num  = parseInt(el)
    if(!isNaN(num) && !arr.includes(num)){
        arr.push(num)
    }
}
for(let el of arr){
    if(func(el))answer++
}
return answer;
}
