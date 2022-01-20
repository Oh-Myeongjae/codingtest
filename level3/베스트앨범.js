/*
문제 설명
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 
노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

제한사항
genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
장르 종류는 100개 미만입니다.
장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
모든 장르는 재생된 횟수가 다릅니다.
*/
function solution(genres, plays) {
    var answer = [];
    let obj = {}
    genres.map((x,idx)=>obj[x] === undefined ? obj[x] = plays[idx] : obj[x] += plays[idx])
    let kind = []
    let size = Object.keys(obj).length
    for(let i=0;i<size;i++){
        let max = Math.max(... Object.values(obj))
        Object.keys(obj).map((x)=>{
            if(obj[x] === max){
                kind.push(x)
                obj[x] = -1
            }
        })
    }
    for(let el of kind){
        let temp = {}
         genres.map( (x,idx) => {if(x === el) temp[idx] = plays[idx] })
        let size = Object.keys(temp).length >= 2 ? 2 : Object.keys(temp).length
        for(let i=0;i<size;i++){
            let max = Math.max(...Object.values(temp))
            for(let el of Object.keys(temp)){
                if(temp[el] === max){
                    answer.push(parseInt(el))
                    temp[el] = -1
                    break;
                }
            }
        }
    }
    return answer;
}
