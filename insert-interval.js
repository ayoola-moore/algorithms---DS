function insertInterval(intervals, newInterval) {
    const combinedIntervals = [...intervals, newInterval]
    const sortedIntervals = combinedIntervals.sort((a, b)=>a[0]- b[0])

    const mergedIntervals = [sortedIntervals[0]]

    for (let i = 1; i < sortedIntervals.length; i++) {
        const a = mergedIntervals[mergedIntervals.length - 1];
        const b = sortedIntervals[i];
        if(a[1] >= b[0]){
            a[1] = Math.max(b[1], a[1])
        }else{
            mergedIntervals.push(b)
        }
    }
    return mergedIntervals
    
}

console.log(insertInterval([[1,3],[5,7],[8,12]], [4,5])) // [[1,3], [4,7], [8,12]]
console.log(insertInterval([[1,3],[5,7],[8,12]], [4,10])) // [[1,3], [4,12]]
console.log(insertInterval([[2,3],[5,7]], [1,4])) // [[1,4], [5,7]]