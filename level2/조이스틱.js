/*
문제 설명
조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동
예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
만들고자 하는 이름 name이 매개변수로 주어질 때, 
이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

제한 사항
name은 알파벳 대문자로만 이루어져 있습니다.
name의 길이는 1 이상 20 이하입니다.
*/
function solution(name) {
    var answer = 0;
    let str = 'A'.repeat(name.length)
    let arr = []
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<name.length;i++){
        let idx = char.indexOf(name[i]);
        if(idx<=12){
            answer += idx
        }else{
            answer += (26-idx)
        }
    }
   
    const func = (s,idx,count,last)=>{
        if(count === last-1){
            arr.push(count)
            return
        }
        let temp = s.split('')
        temp[idx] = name[idx]
        s = temp.join('')
        if(s === name){
            arr.push(count)
            return
        }else{
            count++
            let num1 = idx+1>name.length-1 ? 0 : idx+1
            let num2 = idx-1<0 ? name.length-1 : idx-1
            func(s,num1,count,last)
            func(s,num2,count,last)
        }
    }
   func(str,0,0,name.length)
    arr.sort((a,b)=>a-b)
    answer+=arr[0]
    return answer;
}
