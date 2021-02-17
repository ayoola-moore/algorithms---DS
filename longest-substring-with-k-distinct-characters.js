function longestSubString(str, K) {
    let longestSubString = 0, subStr = "", charType= 0, prevChar=null;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // the only time we'll need to form a substring is if it within the char limit and adding the current character composes a valid substr 
        // then we can update the result and variable that supports the result and the next string.
        // if we do the this iteration we would have obtained a meaningful result
        if(){//


        }
        subStr.concat(char);
        prevChar = charType +=
        longestSubString = Math.max(longestSubString, subStr.length)
    }
    return longestSubString
}