/*
문제 설명
n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 
1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때,
1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

제한사항
노드의 개수 n은 2 이상 20,000 이하입니다.
간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.
*/
function solution(n, edge) {
    var answer = 0;
    let check = new Array(n+1).fill(true)
    check[1] = false
    const func = (arr) => {
        let temp = []
        for(let el of arr){
            for(let i=0;i<edge.length;i++){
                if(edge[i][0] === el){
                    if(check[edge[i][1]]){
                        check[edge[i][1]] = false
                        temp.push(edge[i][1])
                        edge.splice(i,1)
                        i--
                    }else{
                        edge.splice(i,1)
                        i--
                    }
                }else if(edge[i][1] === el){
                    if(check[edge[i][0]]){
                        check[edge[i][0]] = false
                        temp.push(edge[i][0])
                        edge.splice(i,1)
                        i--
                    }else{
                        edge.splice(i,1)
                        i--
                    }   
                }
            }
        }
         if(temp.length !== 0){
                answer = temp.length
                func(temp)
         }
    }
    func([1])
    return answer;
}
