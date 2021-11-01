/*
카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
다음은 카카오 아이디의 규칙입니다.

아이디의 길이는 3자 이상 15자 이하여야 합니다.
아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
"네오"는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.
신규 유저가 입력한 아이디가 new_id 라고 한다면,

1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

[문제]
신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, 
"네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.

[제한사항]
new_id는 길이 1 이상 1,000 이하인 문자열입니다.
new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.
*/

function solution(new_id) {
    var answer = '';
    let str = '';
    const special = '~!@#$%^&*()=+[{]}:?,<>/'
    //1단계
    new_id = new_id.toLowerCase();
    
    //2단계
    for(let i=0;i<new_id.length;i++){
        if(special.includes(new_id[i])){
           continue; 
        }else{
            str += new_id[i]
        }
    }
    
    //3단계
    let check = false;
    for(let i=0;i<str.length;i++){
        if(str[i] !== '.'){
            check = false;
            answer += str[i]
        }else{
            if(check === false){
                answer += '.'
                check = true
            }else{
                continue;
            }
        }
    }
 
    //4단계
    if(answer[0] === '.'){
       answer = answer.slice(1)
    }
    if(answer[answer.length-1] === '.'){
       answer = answer.slice(0,-1)
    }
   
    //5단계
    if(answer.length === 0){
        answer += 'a'
    }
    //6단계
    if(answer.length >= 16){
       answer =  answer.slice(0,15)
    }
    if(answer[answer.length-1] === '.'){
       answer =  answer.slice(0,-1)
    }
    //7단계
    if(answer.length <= 2){
        while(answer.length<3){
            answer += answer[answer.length-1]
        }    
    }
    return answer;
}

/*
위의 문제는 
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
이런식으로 정규식과 체이닝을 이용하여 간단하게 표현하는 방식이 있을수 있다.
하지만 지금의 나로는 정규표현식에 대하여 익숙하지 않은 문제가 있다.
또한 위의 표현으로 문제를 해결하면 성능은 오히려 떨어지는 문제가 발생했다.
아직 정규식이 익숙하지 않아서 성능이 왜 이렇게 나오는지 정확히는 모르지만
기존의 내방식은 조건식을 많이 쓰지만 필요에 따라서는 코드실행을 안할때도 있지만
정규표현식은 반드시 코드를 실행하여서 원하는 표현으로 만들어 버리는 방식을 
취하고 있기 때문에 이부분에서 성능에서 차이가 발생하는것 같다.

나중에 정규표현식이 조금더 익숙해지면 조건문과 정규표현식을 적절히 사용하여
코드를 개선해 봐야겠다.
*/
