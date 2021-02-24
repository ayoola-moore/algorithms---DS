function findMinimumNumberOfRooms(intervals) {
    let minimum = 0

    const startTime = []
    const endTime = []

    for (let i = 0; i < intervals.length; i++) {
        startTime.push(intervals[i][0])
        endTime.push(intervals[i][1])
    }

    startTime.sort((a, b) => a - b)
    endTime.sort((a, b) => a - b)    
    
    //this works
    // let i= 0, j=0
    // while (i < startTime.length) {
    //     if(startTime[i] < endTime[j]){
    //         minimum++;
    //     }else{
    //         j++
    //     }
    //     i++
    // }

    //this works too
    let endIndex= 0;
    for (let i = 0; i < startTime.length; i++) {
       if(startTime[i] < endTime[endIndex]){
           minimum++
       }else{
        endIndex++
       }
    }

    return minimum
}

console.log(findMinimumNumberOfRooms([[1,4], [2,5], [7,9]]))
console.log(findMinimumNumberOfRooms([[6,7], [2,4], [8,12]]))
console.log(findMinimumNumberOfRooms([[1,4], [2,3], [3,6]]))
console.log(findMinimumNumberOfRooms([[4,5], [2,3], [2,4],[3,5]]))
// console.log(findMinimumNumberOfRooms([[1,4], [2,5], [7,9]]))