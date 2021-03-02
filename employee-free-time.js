function findEmployeeFreeTime(intervals) {
    const employeeFreeTime = []
    // combine all intervals
    let combinedIntervals = []
    for (let i = 0; i < intervals.length; i++) {
        combinedIntervals.push(...intervals[i])
    }
    combinedIntervals = combinedIntervals.sort((a, b) => a[0] - b[0])

    // merge all intervals
    const mergedIntervals = [combinedIntervals[0]]

    for (let j = 1; j < combinedIntervals.length; j++) {
        
        let a = mergedIntervals[mergedIntervals.length-1], aStart = a[0], aEnd = a[1];
        
        let b = combinedIntervals[j], bStart= b[0], bEnd = b[1];

        if (aEnd >= bStart) {
            a[1] = Math.max(aEnd, bEnd)
        } else {
            mergedIntervals.push(b)
        }
    }

    // find the common interval gap(s) that will determine free time
    for (let k = 1; k < mergedIntervals.length; k++) {
        const time = mergedIntervals;
        if (time[k - 1][1] <= time[k][0]) {
            const freeInterval = [time[k - 1][1], time[k][0]]
            employeeFreeTime.push(freeInterval)
        }

    }

    return employeeFreeTime
}

console.log(findEmployeeFreeTime([[[1,3]],[[2,4]],[[3,5],[7,9]]]));
console.log(findEmployeeFreeTime([[[1, 3], [5, 6]], [[2, 3], [6, 8]]]));
console.log(findEmployeeFreeTime([[[1,3]],[[9,12]],[[2,4],[6,8]]]));