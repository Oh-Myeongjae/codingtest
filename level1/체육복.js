/*
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 
바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
- 전체 학생의 수는 2명 이상 30명 이하입니다.
- 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
- 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
- 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
- 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 
  이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
  남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/
function solution(n, lost, reserve) {
    var answer = n-lost.length;
    let copy = []
   
    for(let el of reserve){
        if(lost.includes(el)){
            answer++
            lost.splice(lost.indexOf(el),1)
        }else{
            copy.push(el)
        }
    }
    
    console.log('lost',lost)
    console.log('copy',copy)
    lost.sort()
    copy.sort()
    let size = copy.length;
    for(let i=0;i<size;i++){
        if(lost.length === 0 || copy.length === 0){
            break;
        }
        
        for(let x=0;x<lost.length;x++){
            if(lost[x]-copy[i] > -2 && lost[x]-copy[i] < 2){
                answer++;
                lost.splice(x,1)
                break;
            }
        }
    }
    
    return answer;
}
/*
문제를 푸는데 대부분의 테스트를 통과는 하였지만 37,38번째 줄에 정렬을 안시켰을때 몇개의 테스트케이스는 
통과하지 못하는걸 보았는데 어떤 예제상황인지 나오지 않아 알수없지만 효율성면서 통과가 안되었던거 아닌까 싶다.
정렬을 통해서 앞에서 부터 빠르게 확인하는 케이스가 있었던거 아닐까 유추해본다.
*/