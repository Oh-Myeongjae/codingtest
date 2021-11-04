/*
0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다.
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를
return 하도록 solution 함수를 완성해주세요.
*/
//1. 모든수가 담긴 배열생성
//2. 제시된 numvers배열에의 각각의 요소르 순회 하면서 1번에서 만들어 놓은 배열에서 요소 제외
//3. 재외하고 남은 배열의 요소를 모두 합한다.
function solution(numbers) {
    var answer = -1;
    
    //1
    let arr = [0,1,2,3,4,5,6,7,8,9]
    
    //2
    for(let el of numbers){
        let idx = arr.indexOf(el)
        arr.splice(idx,1)
    }
    
    //3
    answer =  arr.reduce((a,b)=>a+b)
    return answer;
}