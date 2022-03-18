/*
문제 설명
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 
예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.
  
제한 사항
arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다.
입출력 예
*/
function solution(arr) {
    var answer = 1; 
    if(arr.length === 1)return 
    const func = (A,B)=>{
        if(A%B === 0)return B
        else{
            return func(B,parseInt(A%B))
        }
    }
    for(let i=0;i<arr.length;i++){
        let num = func(answer,arr[i])
        answer = answer*arr[i]/num
    }
    
    return answer;
} 
/*
위에 함수는 최대공약수를 구하는 유클리드 호제법을 구현한 함수이고

그함수를 이용해서 최대공배수를 구하는 공식인 A,B 두수를 서로 곱한후 두수의 최대 공약수로 나누는 방식을 구현하였다

A,B의 최소공배수 = A * B / A,B의 최대 공약수
*/
