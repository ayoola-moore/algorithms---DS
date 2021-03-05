// // This doesn't work
// function longestSubString(str, K) {
//     let longestSubString = 0, charMap={}, mapLength=0;

    
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         // mapLength = Object.keys(charMap).length

//         if(!charMap[char]){
//             charMap[char]= 0
//         }
        
//         charMap[char] += 1;
        
//         // if(Object.keys(charMap).length <= K){
//         //     subStr = subStr.concat(char);
//         // }
           
//         let x = 0
//         while(Object.keys(charMap).length > K){
//             const startChar = str[x];
//             charMap[startChar] -= 1;
//             if(charMap[startChar] === 0) delete charMap[startChar]
//             // subStr = subStr.substring(1)
//             x += 1
//             console.log(x+1)
//         }
        
//         longestSubString = Math.max(longestSubString, i-x+1)

//     }
//     return longestSubString || null
// }

//this works
function longestSubString(str, k) {
    let windowStart =0, maxLength = 0, charFrequency = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if(!(rightChar in charFrequency)){
            charFrequency[rightChar] = 0
        }
        charFrequency[rightChar] += 1;

        while(Object.keys(charFrequency).length > k){
            const leftChar = str[windowStart]
            charFrequency[leftChar] -= 1
            if(charFrequency[leftChar]===0) delete charFrequency[leftChar]
            windowStart += 1
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart +1)
    }

    return maxLength
}

//this works
function longestSubString(str, K) {
    let subStr = "", charMap= {}, longest= 0;
    
    let windowStart = 0
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(!charMap[char]){
            charMap[char] = 0
        }
        charMap[char] += 1

        // if(Object.keys(charMap).length <= K){
            //     subStr = subStr.concat(char)
            // }
            
            while (Object.keys(charMap).length > K) {
                // const char = subStr.charAt(0)
                // subStr = subStr.substring(0);
                const leftChar = str[windowStart]
                charMap[leftChar] -= 1
                if(charMap[leftChar]===0) delete charMap[leftChar]
                windowStart += 1
            }
            longest = Math.max(longest, i - windowStart + 1)
    }

    // return Math.max(subStr.length, longest)
    return longest
}


console.log(longestSubString("araaci", 2));//
console.log(longestSubString("araaci", 1));// break
console.log(longestSubString("cbbebi", 3));//