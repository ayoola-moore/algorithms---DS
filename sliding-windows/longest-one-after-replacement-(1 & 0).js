function FindLongestSubarrayOfOne(arr, K) {
    let longestSubArrayOfOnes = 0, maxRepeatingOnes = 0, windowStart =0;
    // this is wrong, we didn't need this because we had to deal with just two elements
    // charMap = {
    //     0: 0,
    //     1: 0
    // }, 
    

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        const el = arr[windowEnd];
        
        if(el === 1) maxRepeatingOnes += 1;

        // ** This are erroneous thinking
        // charMap[el] += 1;
        // maxRepeatingOnes = Math.max(maxRepeatingOnes, charMap[el])

        while((windowEnd - windowStart)+1 - maxRepeatingOnes > K){
            const startEl = arr[windowStart];
            // if(startEl) maxRepeatingOnes -= 1; // this works because if(0) is falsy and if(1) is truthy         
            if(startEl === 1) maxRepeatingOnes -= 1; // but this was used for clarity
            windowStart++ 
        }

        longestSubArrayOfOnes = Math.max(longestSubArrayOfOnes, (windowEnd - windowStart) + 1)
    } ;

    return longestSubArrayOfOnes
}

console.log(FindLongestSubarrayOfOne([0,1,1,0,0], 2))
console.log(FindLongestSubarrayOfOne([0,1,1,0,0,0,1,1,0,1,1], 2))
console.log(FindLongestSubarrayOfOne([0,1,0,0,1,1,0,1,1,0,0,1,1], 3))

