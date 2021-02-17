function multiplication(int1, int2) {
  let matrix = [];
  const arr1 = [];
  for (let i = 0; i < int1; i++) {
    arr1.push(i + 1);
  }

  const arr2 = [];
  for (let i = 0; i < int2; i++) {
    arr2.push(i + 1);
  }

  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    const subMatrix = [];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      const multiple = el1 * el2;
      subMatrix.push(multiple);
    }
    matrix.push(subMatrix);
  }
  return matrix;
}

console.log(multiplication(3, 3)); // [[1,2,3],[2,4,6],[3,6,9]]
