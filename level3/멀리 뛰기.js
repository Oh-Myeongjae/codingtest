/*
문제 설명
효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는
(1칸, 1칸, 1칸, 1칸)
(1칸, 2칸, 1칸)
(1칸, 1칸, 2칸)
(2칸, 1칸, 1칸)
(2칸, 2칸)
의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때,
효진이가 끝에 도달하는 방법이 몇 가지인지 알아내, 여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. 예를 들어 4가 입력된다면, 5를 return하면 됩니다.

제한 사항
n은 1 이상, 2000 이하인 정수입니다.
*/
function solution(n) {
    var answer = 0; 
    let arr = [0,1,2,3]
    if(n<=3) return arr[n]
    const func = (num)=>{
        if(arr[num] !== undefined) return arr[num]
        for(let i=4;i<=num;i++){
            arr[i] = func(i-1)+func(i-2)
            arr[i] %= 1234567
        }
    }
    func(n)
    answer = arr[n]
    return answer;
}
