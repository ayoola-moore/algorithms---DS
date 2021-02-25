function findMaxCpuLoad(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])

    let maxLoad = sortedIntervals[0][2]

    const processedIntervals = [sortedIntervals[0]];

    let a = processedIntervals[processedIntervals.length - 1], aEnd = a[1], bStart, bEnd, b;

    for (let i = 1; i < sortedIntervals.length; i++) {
        b = sortedIntervals[i]
        bStart = sortedIntervals[i][0];
        bEnd = sortedIntervals[i][1];

        if (aEnd >= bStart) {
            // update the p.intervals
            const load = a[2] + b[2]
            a[1] = Math.max(aEnd, bEnd)
            // find the max
            a[2] = load
            maxLoad = Math.max(maxLoad, load)

        } else {
            // add new set to the m.intervals
            processedIntervals.push(sortedIntervals[i]);
            maxLoad = Math.max(maxLoad, b[2])
        }
    }

    return maxLoad
}

console.log(findMaxCpuLoad([[1,4,3],[2,5,4],[7,9,6]]))
console.log(findMaxCpuLoad([[6,7,10],[2,4,11],[8,12,15]]))
console.log(findMaxCpuLoad([[1,4,2],[2,4,1],[3,6,5]]))