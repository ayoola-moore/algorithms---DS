function reverseString(str) {
    let arr = str.split("")
    let reverseArr = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        reverseArr.unshift(element)
    }
    return reverseArr.join("")
}

console.log(reverseString("abc"))