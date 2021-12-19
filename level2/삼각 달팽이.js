/*
문제 설명
정수 n이 매개변수로 주어집니다.
다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후,
 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 1,000 이하입니다.
*/
function solution(n) {
    var answer = [];
    let make = []
    if(n<=2){
        if(n === 1)answer.push(1)
        else {
            for(let i=1;i<4;i++){
                answer.push(i)
            }
        }
     return answer
    }
    for(let i=1;i<=n;i++){
        let temp = new Array(i).fill(0)
        make.push(temp)
    }
    let count = 1
    let limit = n%2===0 ? n/2 : (n+1)/2
    for(let i=0;i<=limit;i++){
        for(let el of make){
            if(el[i] !== undefined && el[i] === 0){
                el[i] = count
                count++
            }
        }
        for(let j=0;j<make[make.length-1-i].length;j++){
            if(make[make.length-1-i][j] === 0){
                make[make.length-1-i][j] = count
                count++
            }
        }
        for(let z=make.length-1;z>i;z--){
            let last = make[z]
            if(last[last.length-1-i] === 0){
                last[last.length-1-i] = count
                count++
            }
        }
    }
    console.log('make',make)
    for(let element of make){
        answer = answer.concat(element)
    }
    return answer;
}