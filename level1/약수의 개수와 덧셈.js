/*
두 정수 left와 right가 매개변수로 주어집니다.
 left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000
*/
function solution(left, right) {
    var answer = 0;
    const func = (num)=>{
        let sqrt = Math.sqrt(num)
        let arr = []
        for(let i=1;i<=sqrt;i++){
            if(num%i === 0){
                if(num/i === i){
                    arr.push(i)
                }else{
                    arr.push(i)
                    arr.push(num/i)
                }
            }
        }
        let count = arr.length
        if(count%2 === 1){
            return false
        }else{
            return true
        }
    }
    for(let i=left;i<=right;i++){
        if(func(i)){
            answer+=i
        }else{
            answer-=i
        }
    }
    return answer;
}