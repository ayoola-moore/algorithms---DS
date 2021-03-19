function findLongestSubStringGivenK(str, k) {
    let longestSubstring = 0, charMap = {}, windowStart = 0, maxRepeatingChar=0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const char = str[windowEnd];

        if(!charMap[char]) charMap[char] = 0;

        charMap[char] += 1;

        maxRepeatingChar = Math.max(maxRepeatingChar, charMap[char])

        while ((windowEnd - windowStart + 1 - maxRepeatingChar) > k) {
            const char = str[windowStart]
            charMap[char] -= 1;
            if(charMap[char] === 0) delete charMap[char]
            windowStart++
        }
        
        longestSubstring = Math.max(longestSubstring, windowEnd - windowStart + 1)
    }

    return longestSubstring
}


console.log(findLongestSubStringGivenK("aabccbb", 2))
console.log(findLongestSubStringGivenK("aabccbb", 2))
console.log(findLongestSubStringGivenK("abccde", 1))
console.log(findLongestSubStringGivenK("abcaa", 1))