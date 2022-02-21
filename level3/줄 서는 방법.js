/*
문제 설명
n명의 사람이 일렬로 줄을 서고 있습니다. n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다.
n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다. 예를 들어서 3명의 사람이 있다면 다음과 같이 6개의 방법이 있습니다.

[1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 1, 2]
[3, 2, 1]
사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성해주세요.

제한사항
n은 20이하의 자연수 입니다.
k는 n! 이하의 자연수 입니다.
*/
function solution(n, k) {
    var answer = [];
    let fact = new Array(n).fill(0)
    fact[0] = 1
    for(let i=1;i<n;i++){
        fact[i] = fact[i-1]*i 
    }
    const func = (count,arr) => {
        if(arr.length === 1){
            answer.push(arr[0])
            return
        }
        if(answer.length === 0)count -= 1
        
        let temp = fact[arr.length-1]
        let idx = parseInt(count/temp)
        answer.push(arr[idx])
        let copy = arr.slice()
        copy.splice(idx,1)
        count-=(temp*idx)
        func(count,copy)
    }
    
    let people = new Array(n).fill(0)
    people = people.map((x,idx)=>idx+1)
    func(k,people)
    return answer;
}
