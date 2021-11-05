/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/
function solution(nums) {
    var answer = 0;
    let arr1 = []
    let arr2 = []
    let check = true
    
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let y=j+1;y<nums.length;y++){             
                    arr1.push(nums[i]+nums[j]+nums[y])
            }
        }
    }
    for(let el of arr1){
        for(let z=2;z<=Math.sqrt(el);z++){
            if(el%z === 0){   
                check = false
            }
        }
        if(check){
            arr2.push(el)
        }else{
            check = true
        }   
    }
    answer = arr2.length
    return answer;
}
/*
해결방법을 보면 3중 for문을 사용하고 있는데 추후에 가능하면 재귀함수를 이용해서 해결해 보고싶다.
왜냐하면 for문을 중복으로 사용하닌까 코드의 가독성이 많이 떨어지기 때문이다

*/