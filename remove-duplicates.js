// two pointers:: remove duplicates

function removeDup(arr) {
    let p1 = 1, p2 = 1;

    while (p2 < arr.length) {
        if(arr[p1 -1] !== arr[p2]){
            arr[p1] = arr[p2]
            p1 += 1
        }
        p2 +=1;
    }
    return p1
}

// function removeDup(arr) {
//     let p1= 0, p2 = 0

//     while (p2 < arr.length) {
//         if(arr[p1] !== arr[p2]){
//             p1 = p1+1;
//             p2 = p2+1
//             console.log(p1, p2)
//         }else{
//             p2 = p2 +1
//             console.log(p2)
//         }
//     }
//     return p1
// }

// console.log(removeDup([2,3,3,3,6,9,9])) // 4 -> 2,3,6,9
// console.log(removeDup([2,2,2,11])) //2 -> 2, 11
// console.log(removeDup([1,2])) //2 -> 2, 11

function rmDup(arr, key) {
    let nextElement = 0
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] !== key){
           arr[nextElement] = arr[i]
           nextElement += 1
       } 
       
    }
    return nextElement
}

// console.log(rmDup([3,2,3,6,3,10,9,3],3))
console.log(rmDup([2,11,2,2,1],2))