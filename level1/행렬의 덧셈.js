/*
문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
*/
function solution(arr1, arr2) {
    var answer = [];
    let x = arr1.length
    let y = arr1[0].length
    for(let i=0;i<x;i++){
        let arr = []
        for(let z=0;z<y;z++){
            arr.push(arr1[i][z]+arr2[i][z])
        }
        answer.push(arr)
    }
    return answer;
}
/*
 (java)
class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int[][] answer = new int[arr1.length][];
        for (int i = 0; i < arr1.length; i++) {
            int[] arr = new int[arr1[i].length];
            for (int j = 0; j < arr1[i].length; j++) {
                arr[j] = arr1[i][j] + arr2[i][j];
            }
            answer[i] = arr;
        }
        return answer;
    }
}
*/
