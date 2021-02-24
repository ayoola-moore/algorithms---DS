function isAttendanceTrue(interval) {
    let canAttend = true;

    const sortedIntervals = interval.sort((a, b) => a[0] - b[0]);

    const mergedInterval = [sortedIntervals[0]]
    
    for (let i = 1; i < sortedIntervals.length; i++) {
        const aInterval = mergedInterval[mergedInterval.length -1], aEnd = aInterval[1], bInterval = sortedIntervals[i];
        let bStart = bInterval[0];
        if (aEnd >= bStart) {
            canAttend = false
            return canAttend
        }else{
            mergedInterval.push(bInterval)
        }
    }
    return canAttend
}

console.log(isAttendanceTrue([[1,4],[2,5], [7,9]]))
console.log(isAttendanceTrue([[6,7],[2,4], [8,12]]))
console.log(isAttendanceTrue([[4,5],[2,3], [3,6]]))
  