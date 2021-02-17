// pair with target sum... two pointers
function pair(arr, targetSum) {
   let left = 0, right = arr.length -1, pair=[-1, -1], sum;

    while(left< right){
        sum = arr[left] + arr[right]
        if(sum === targetSum){
            return [left, right]
        }
        if(sum < targetSum){
            left++
        }else{
            right--
        }
    }
    
    return pair
}

console.log(pair([1,2,3,4,6], 6))

console.log(pair([2,5,9,11], 11))

