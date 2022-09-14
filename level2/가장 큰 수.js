/*
문제 설명
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고,
이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 
순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

function solution(numbers) {
    var answer = '';
    let arr = numbers.map((num)=>{
        return num += ''
    })
    answer = arr.sort((a,b)=>{
        let str1 = a.repeat(4).slice(0,4)
        let str2 = b.repeat(4).slice(0,4)
        return str1-str2
    }).reverse().join('')
    if(parseInt(answer) === 0)return '0'
    return answer;
}

/*
function solution(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;
}

주석의 방식은 다른분이 해결하는 방식이다. 
큰흐름에서 문자열로 변경후에 정렬 조인하는 방식은 비슷하나 로직적인 차이가 있었다.
기존의 나의 방식은 4번반복후에 자릿수 비교인데 이방식도 수학적으로 증명이 가능하지만 접근이 쉽지 않았다.
하지만 주석의 방법은 조금더 직관적으로 접근이 가능해서 좋은 방법인거 같아서 기록하게 되었다.
*/


