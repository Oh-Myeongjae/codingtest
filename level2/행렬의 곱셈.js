/*
문제 설명
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
곱할 수 있는 배열만 주어집니다.
*/
function solution(arr1, arr2) {
    var answer = [];
    for(let el of arr1){
        let make = []
        for(let i=0;i<arr2[0].length;i++){
            let num = 0;
            for(let j=0;j<arr2.length;j++){
                num += el[j]*arr2[j][i]
            }
            make.push(num)
        }
        answer.push(make)
    }
    return answer;
}
/*
(java)
class Solution {
  public int[][] solution(int[][] arr1, int[][] arr2) {
        int[][] answer = new int[arr1.length][arr2[0].length];
        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr2[0].length; j++) {
                int sum = 0;
                for (int k = 0; k < arr1[i].length; k++) {
                    int a = arr1[i][k];
                    int b = arr2[k][j];
                    sum += a*b;
                }
                answer[i][j] = sum;
            }
        }
        // System.out.println("Arrays.deepToString(answer) = " + Arrays.deepToString(answer));
        return answer;
    }
}
*/
