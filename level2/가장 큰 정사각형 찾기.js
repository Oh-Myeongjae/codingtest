/*
문제 설명
1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 
표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)

예를 들어

1	2	3	4
0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 있다면 가장 큰 정사각형은

1	2	3	4
0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 되며 넓이는 9가 되므로 9를 반환해 주면 됩니다.

제한사항
표(board)는 2차원 배열로 주어집니다.
표(board)의 행(row)의 크기 : 1,000 이하의 자연수
표(board)의 열(column)의 크기 : 1,000 이하의 자연수
표(board)의 값은 1또는 0으로만 이루어져 있습니다.
*/
function solution(board)
{
    var answer = 1234;
    let max = 0
    if(board.length === 0) answer = 0
    if(board.length === 1){
        for(let el of board[0]){
            if(max<el) max = el
        }
      answer = max*max
    }else{
        for(let i=1;i<board.length;i++){
            for(let j=1;j<board[i].length;j++){
                if(board[i][j] !== 0){
                    let min = Math.min(board[i][j-1],board[i-1][j],board[i-1][j-1])
                    board[i][j] = min+1
                    if(max<board[i][j])max=board[i][j]
                } 
            }
        }
    }
    answer = max*max
    return answer;
}
/*
dp(동적계획법을 이용한 풀이)
동적계획법 : 복잡한 하나의 문제를 간단한 여러개의 문제로 나누어 푸는 방법을 말한다. 피보나치의수열 같은것

이문제에서 동적계획법은 위에서부터 2*2의 정사각형에서 오른쪽아래 꼭지점을 보고 판단하여 그꼭지점으로 만들수 있는 가장큰 정사각형을 위에서 부터 차례대로 만들어보면서 
만들수 있는 가장큰 사각형을 구하는 방식이다. 
위에 문제를 풀때 참고한 링크이다.
https://www.youtube.com/watch?v=9AOMXwNrNpk
*/
