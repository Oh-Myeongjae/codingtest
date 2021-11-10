/*
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.

*/
function solution(n) {
    var answer = 0;
    let arr = []
    while(true){
        arr.push(n%3)
        n = parseInt(n/3)
        if(n === 0){
            break;
        }
    }
    arr.reverse()
    answer += arr[0]
    let num = 3
    for(let i=1;i<arr.length;i++){
        answer += arr[i]*num
        num *= 3
    }
    return answer;
}