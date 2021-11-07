/*
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
*/
function solution(numbers) {
    var answer = [];
    const func = (a,arr) => {
        if(arr.length === 1){
            if(!answer.includes(a+arr[0])){
                answer.push(a+arr[0])
            }
            return
        }
        for(let el of arr){
            if(!answer.includes(a+el)){
                answer.push(a+el)
            }            
        }
        return func(arr[0],arr.slice(1))
    }
    func(numbers[0],numbers.slice(1))
    answer.sort((a,b)=>a-b)
    return answer;
}