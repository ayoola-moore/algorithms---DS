function smallestSubArray(arr, S) {
  let min = Infinity,
    sum = 0,
    subArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= S) {
      // if we find any single element that mets the condition, then reurn 1 since 1 is the possibly smallest subarray
      return 1;
    } else {
      // form a subArray
      subArray.push(arr[i]);
      sum += arr[i];
      if (sum >= S) {
        // update the min
        min = Math.min(min, subArray.length);
        while (sum >= S) {
          const D = subArray.splice(0, 1)[0];
          sum -= D;
          if (sum >= S) min = Math.min(min, subArray.length);
        }
      }
    }
  }

  return min === Infinity ? 0 : min;
}

// console.log(smallestSubArray([2, 1, 5, 2, 3, 2], 7)); // 2
// console.log(smallestSubArray([2, 1, 5, 2, 8], 7)); //1
// console.log(smallestSubArray([3, 4, 1, 1, 6], 8)); // 3
// console.log(smallestSubArray([4, 4, 9], 8)); // 1
// console.log(smallestSubArray([4, 4, 6], 8)); // 2
// console.log(smallestSubArray([1,1,1,1], 8)); // 0
// console.log(smallestSubArray([], 8)); // 0
console.log(smallestSubArray([-8, -5, -1], -4)); // 1 Think about why the algorithm require positive input. In the meantime this just an experiment to see if the code will function with negative input and it does. However, its almost as if, the only result we could get from negative inputs are 1 and 0
