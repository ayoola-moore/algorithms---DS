// This works well
function maxSubArray(arr, k) {
    let max = 0;
    let subArray = []
    let subSum = 0

    for (let i = 0; i < arr.length; i++) {
        subArray.push(arr[i])
        subSum += arr[i]
        if(subArray.length = k){
            max = Math.max(subSum, max)
            const subtracted = subArray.splice(0,1)
            subSum -= subtracted
        }
    }
    return max
}

console.log(maxSubArray([2,3,4,1,5],2))
console.log(maxSubArray([2,1,5,1,3,2],3))

// This doesn't even though it was copied directly from educative.io
function max_sub_array_of_size(k, arr) {
    let maxSum = 0, windowSum = 0, windowStart = 0;

    for (window_end =0; window_end < arr.length; window_end++) {
        windowSum += arr[window_end]
        if(window_end >= k-1){
            maxSum= Math.max(maxSum, windowSum)
            windowSum -= arr[windowStart]
            // windowStart += 1
        }
    }
    return maxSum
}

// console.log(max_sub_array_of_size([2,3,4,1,5],2))
// console.log(max_sub_array_of_size([2,1,5,1,3,2],3))



// console.log(smallestSubArray([2,1,5,2,3,2], 7))
// console.log(smallestSubArray([2,1,5,2,8], 7))
// console.log(smallestSubArray([3,4,1,1,6], 8))
