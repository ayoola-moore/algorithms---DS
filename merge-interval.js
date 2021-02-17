function mergeInterval(intervals) {
  const sortedInterval = intervals.sort((a, b) => a[0] - b[0]);

  const merged = [sortedInterval[0]];

  for (let i = 1; i < sortedInterval.length; i++) {

    //a is previous and b is current
     const a = merged[merged.length -1], b = sortedInterval[i], bStart = b[0], aEnd = a[1], bEnd= b[1];

     if(aEnd >= bStart){ 
      a[1]= Math.max(aEnd, bEnd) // updating merges
     }else{
       merged.push(b) // so push the current interval
     }
  }
  return merged;
}

console.log(
  mergeInterval([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
); // expected [[1,5], [7,9]]

console.log(
  mergeInterval([
    [6,7],
    [2,4],
    [5,9],
  ])
); // expected [[2,4], [5,9]]

console.log(
  mergeInterval([
    [1,4],
    [2,6],
    [3,5],
  ])
); // expected [[1,6]]

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log( mergeInterval([[1,3],[2,6],[8,10],[15,18]]))
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Input: intervals = [[1,4],[4,5]]
console.log( mergeInterval([[1,4],[4,5]]))
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
