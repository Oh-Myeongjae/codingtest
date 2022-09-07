/*
문제 설명
정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
정수 n, left, right가 매개변수로 주어집니다. 
주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 107
0 ≤ left ≤ right < n2
right - left < 105

*/
function solution(n, left, right) {
    var answer = [];
    let start = parseInt(left/n)
    let end =  parseInt(right/n)
    let size = end - start +1
    let first = []
    for(let i=0;i<size;i++){
        first.push(new Array(n).fill(0))
    }
    for(let i=0;i<first.length;i++){
        let num = start+i+1
        for(let j=0;j<first[i].length;j++){
            if(j<num)first[i][j] = num
            else{first[i][j] = first[i][j-1]+1}
        }
    }
    for(let el of first){
        answer = answer.concat(el)
    }
    let point = left%n
    let limit = right-left+1
    answer = answer.splice(point,limit)
    return answer;
}
