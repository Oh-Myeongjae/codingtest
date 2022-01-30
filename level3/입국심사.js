/*
문제 설명
n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 
가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다.
하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.

모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때,
모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.

제한사항
입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
심사관은 1명 이상 100,000명 이하입니다.
*/
function solution(n, times) {
    var answer = 0;
    let check = true
    let min = Math.min(...times)
    let max = Math.max(...times)*n
    while(check){
        let left = min
        let right = max
        let mid = Math.floor((min+max)/2)
        if(answer === mid)check = false
        let sum = times.reduce((pre,cur)=>{
            return pre+parseInt(mid/cur)
        },0)
        //console.log('sum',sum)
        if(sum == n){
            answer = mid
            max = mid
        }else{
            n > sum ? min = mid : max = mid 
        }
        if(min === left && max === right && check === true){
            answer  = max
            check = false
        }
    }
    
    // min = answer-Math.min(...times)
    // max = answer
    // while(true){
    //     let mid = Math.floor((min+max)/2)
    //     let sum = times.reduce((pre,cur)=>{
    //         return pre+(max/cur)
    //     },0)
    //     if(sum === n){
    //         answer = max
    //         break;
    //     }
    //     max--
    // }
    return answer;
}

/*
function solution(n, times) {
    var answer = 0;
    times.sort((a,b)=>a-b)
    let work = new Array(times.length).fill(0)
    //console.log('work1',work)
    while(n>0){
        //console.log('work1',work)
        let temp  = work.slice().map((x,idx)=>{
            return x+times[idx]
        })
        //console.log('temp',temp)
        let min = Math.min(...temp)
        let mIdx = temp.indexOf(min)
        work[mIdx] += times[mIdx] 
        n--
        //console.log('work2',work)
      //  console.log('n',n)
        if(n === 0) answer = min
    }
    //console.log('work',work)
    return answer;
}
*/
