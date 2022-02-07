/*
문제 설명
다음과 같은 다각형 모양 지형에서 캐릭터가 아이템을 줍기 위해 이동하려 합니다.

지형은 각 변이 x축, y축과 평행한 직사각형이 겹쳐진 형태로 표현하며, 캐릭터는 이 다각형의 둘레(굵은 선)를 따라서 이동합니다.

만약 직사각형을 겹친 후 다음과 같이 중앙에 빈 공간이 생기는 경우, 다각형의 가장 바깥쪽 테두리가 캐릭터의 이동 경로가 됩니다.

단, 서로 다른 두 직사각형의 x축 좌표 또는 y축 좌표가 같은 경우는 없습니다.

즉, 위 그림처럼 서로 다른 두 직사각형이 꼭짓점에서 만나거나, 변이 겹치는 경우 등은 없습니다.

다음 그림과 같이 지형이 2개 이상으로 분리된 경우도 없습니다.

한 직사각형이 다른 직사각형 안에 완전히 포함되는 경우 또한 없습니다.

지형을 나타내는 직사각형이 담긴 2차원 배열 rectangle, 초기 캐릭터의 위치 characterX, characterY, 아이템의 위치 itemX, itemY가 solution 함수의 매개변수로 주어질 때,
캐릭터가 아이템을 줍기 위해 이동해야 하는 가장 짧은 거리를 return 하도록 solution 함수를 완성해주세요.

제한사항
rectangle의 세로(행) 길이는 1 이상 4 이하입니다.
rectangle의 원소는 각 직사각형의 [좌측 하단 x, 좌측 하단 y, 우측 상단 x, 우측 상단 y] 좌표 형태입니다.
직사각형을 나타내는 모든 좌표값은 1 이상 50 이하인 자연수입니다.
서로 다른 두 직사각형의 x축 좌표, 혹은 y축 좌표가 같은 경우는 없습니다.
문제에 주어진 조건에 맞는 직사각형만 입력으로 주어집니다.
charcterX, charcterY는 1 이상 50 이하인 자연수입니다.
지형을 나타내는 다각형 테두리 위의 한 점이 주어집니다.
itemX, itemY는 1 이상 50 이하인 자연수입니다.
지형을 나타내는 다각형 테두리 위의 한 점이 주어집니다.
캐릭터와 아이템의 처음 위치가 같은 경우는 없습니다.
*/
function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    let max = 0;
    rectangle = rectangle.map((x)=>{
        x = x.map((n)=>{
            n*=2
            max = max === 0 ? n : Math.max(max,n)
            return n
        })
        return x
    })
    max += 2
    let arr = new Array(max)
    for(let i=0;i<arr.length;i++){
        arr[i] = new Array(max).fill(0)
    }    
    for(let el of rectangle){
             for(let i=max-el[3]-1;i<max-el[1];i++){
            for(let j=el[0];j<=el[2];j++){
                arr[i][j] = 1
            }
        }
       
    }
     for(let el of rectangle){
        for(let i=max-el[3];i<max-el[1]-1;i++){
            for(let j=el[0]+1;j<el[2];j++){
                arr[i][j] = 0
            }
        }
    }
    
    characterX *= 2
    characterY *= 2
    itemX *= 2
    itemY *= 2
    characterY = max-1-characterY
    itemY = max-1-itemY
    
    const func = (now,count) => {
        let temp = []
        while(now.length>0){
            let check = now[0]
            if(check[0] === itemY && check[1] === itemX){
              answer = count
              return
            } 
            if(arr[check[0]][check[1]+1] === 1){
                temp.push([check[0],check[1]+1])
                arr[check[0]][check[1]+1] = 0
            }
              if(arr[check[0]][check[1]-1] === 1){
                temp.push([check[0],check[1]-1])
                arr[check[0]][check[1]-1] = 0
            }
              if(arr[check[0]+1][check[1]] === 1){
                temp.push([check[0]+1,check[1]])
                arr[check[0]+1][check[1]] = 0
            }
              if(arr[check[0]-1][check[1]] === 1){
                temp.push([check[0]-1,check[1]])
                arr[check[0]-1][check[1]] = 0
            }
            now.shift()
        }
      
         if(temp.length !== 0){
             func(temp,count+1)
         }
    }
    arr[characterY][characterX] = 0
    func([[characterY,characterX]],0)
    answer /= 2
    return answer;
}
