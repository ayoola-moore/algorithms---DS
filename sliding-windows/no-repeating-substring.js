function findLongestNonRepeatSubstring(str) {
    let longestSubstring = 0, charMap = {}, subString = ""

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        subString = subString.concat(char)
        
        while (charMap[char]) {
            let leftStart = subString.charAt(0)
            subString = subString.substring(1)
            delete charMap[leftStart]
            leftStart = subString.substring(0)
        }
        
        charMap[char] = true
        
        longestSubstring = Math.max(longestSubstring, subString.length)
    }

    return longestSubstring
}

console.log(findLongestNonRepeatSubstring("aabccbb"))
console.log(findLongestNonRepeatSubstring("abbbb"))
console.log(findLongestNonRepeatSubstring("abccde"))