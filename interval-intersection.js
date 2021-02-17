function findItervalIntersections(arr1,arr2) {
    const intervalIntersections = []
    
    let i = 0, j = 0, a, b;
    while (i < arr1.length && j < arr2.length) {
        a = arr1[i]
        b = arr2[j]
        const aStart = a[0], bStart = b[0],aEnd = a[1], bEnd = b[1];

        if(aStart <= bEnd && bStart <= aEnd){ // here we have established an intersection
            const intersection = []
            intersection[0]= Math.max(aStart, bStart)
            intersection[1]= Math.min(aEnd, bEnd)
            intervalIntersections.push(intersection)
        }
        if(aEnd <= bEnd){
            i++
        }else{
            j++
        }
        
    }

    return intervalIntersections
    
}
console.log(findItervalIntersections([[1,3],[5,6],[7,9]],[[2,3],[5,7]]))
console.log(findItervalIntersections([[1,3],[5,7],[9,12]],[[5,10]]))