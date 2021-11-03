/*
전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

[제한사항]
numbers 배열의 크기는 1 이상 1,000 이하입니다.
numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
hand는 "left" 또는 "right" 입니다.
"left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
*/
function solution(numbers, hand) {
    var answer = '';
    let right = [3,2]
    let left = [3,0]
    let point = {1:[0,0],2:[0,1],3:[0,2],4:[1,0],5:[1,1],6:[1,2],7:[2,0],
                 8:[2,1],9:[2,2],0:[3,1]}
    for(let el of numbers){
        if(el === 1 || el === 4 || el === 7){
            left = point[el]
            answer += 'L'
        }else if(el === 3 || el === 6 || el === 9){
            right = point[el]
            answer += 'R'
        }else{
            let now = point[el]
            //각각이 의미하는것은 [x좌표거리차이,Y좌표거리차이,총거리]
            let lsize = [left[0]-now[0],left[1]-now[1],0]
            let rsize = [right[0]-now[0],right[1]-now[1],0]

            for(let i=0;i<=1;i++){
                //x,y각각의 거리차이를 더해서 총거리를 구해주나 거리는 음수가 될수 없으므로 음수인경우는 양수로 변경해서 더함
                if(lsize[i]<0){
                 lsize[i]*=-1
                }
                lsize[2] += lsize[i]
                
                if(rsize[i]<0){
                 rsize[i]*=-1
                }
                 rsize[2] += rsize[i]
            }
            // 총거리를 비교하여 어느손을 이용하여 누를지 결정
            if(rsize[2]>lsize[2]){
                left = point[el]
                answer += 'L'
            }else if(rsize[2] === lsize[2]){
                //총거리가 같은경우 어느손잡이인지에 따라 손을 선택
                if(hand === 'left'){
                    left = point[el]
                    answer += 'L'
                }else{
                    right = point[el]
                    answer += 'R'
                }
            }else{
                right = point[el]
                    answer += 'R'
            }

        }    
    }
    return answer;
}