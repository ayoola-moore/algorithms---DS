function fib(n) {
    const arr = [0,1]
    while (arr.length <= n) {
        let a = arr[arr.length -2]
        let b = arr[arr.length-1]
        const next = a + b;
        arr.push(next)
    }
    return arr[arr.length-1]
}

console.log(fib(4))
