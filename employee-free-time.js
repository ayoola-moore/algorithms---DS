function findEmployeeFreeTime(intervals) {
    const employeeFreeTime = []

    let earliestTime= Infinity, latestTime = 0;

    for (let i = 0; i < intervals.length; i++) { // [ [[]],[[]] ]
       const currentEmployeeTimeIntervals = intervals[i] ;

       
       let startTimeA = currentEmployeeTimeIntervals[0][0] // eg 5
       let endTimeA   = currentEmployeeTimeIntervals[0][1]
       
       if(currentEmployeeTimeIntervals.length > 1){

           for (let j = 1; j < currentEmployeeTimeIntervals.length; j++) { // [[]]
               const timeIntervals = currentEmployeeTimeIntervals[j]; //[]
               const startTimeB = timeIntervals[0]
               const endTimeB = timeIntervals[1]
               //find time interval
               const intervals = [].push([endTimeA, startTimeB])
               startTimeA = startTimeB;
               endTimeB = endTimeB
            }
        }
        earliestTime = Math.min(earliestTime, startTime)
        latestTime   = Math.min(latestTime, endTime)
    }
}