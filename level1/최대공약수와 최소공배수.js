/*
문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.
*/
function solution(n, m) {
    var answer = [];
    let max = m>n?m:n
    let min = m<n?m:n
    let minArr = []
  
    for(let i=1;i<Math.sqrt(min);i++){
        if(min%i === 0){
            minArr.push(i)
           if(!(i===Math.sqrt(min))){
               minArr.push(min/i)
           }
        }
    }
    minArr.sort((a,b)=>a-b)
    console.log('minArr',minArr)
    for(let i=minArr.length-1;i>=0;i--){
        if(max%minArr[i] === 0){
            answer.push(minArr[i])
            break;
        }
    }
    answer.push(n*m/answer[0])
    return answer;
}