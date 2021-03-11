function findMaxNumberOfFruits(fruits) {
    let maxFruitCount = 0;
    
    const fruitType= {}

    const subArray = []

    for (let i = 0; i  < fruits.length; i++) {

        const fruit = fruits[i]

        if(!fruitType[fruit]) fruitType[fruit] = 0

        fruitType[fruit] += 1

        // (a) first check if the fruitType is less than 2... sounds valid but this is a potential pity fall. This is because there's a while loop and Math.max that comes after that. The idea is that while loop will cater for case beyond 2 in this case, and the Math.max that comes after that will get the max value
        // if(Object.keys(fruitType).length <= 2){
        //     subArray.push(fruits[i])
        // }
        
        // this is ideal, bacause ? see comments (a) above 
        subArray.push(fruits[i])

        // if its more we start decrementing the fruittype
        while(Object.keys(fruitType).length > 2){
            const fruit = subArray.shift()
            fruitType[fruit] -= 1;
            if(fruitType[fruit] < 1) delete fruitType[fruit]
        }
       
        maxFruitCount = Math.max(maxFruitCount, subArray.length)
    }

    return maxFruitCount
}

console.log(findMaxNumberOfFruits(['A','B','C','A','C']))
// console.log(findMaxNumberOfFruits(['A','B','C','B','B','C']))