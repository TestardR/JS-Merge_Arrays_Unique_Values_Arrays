const array1 = [1, 2, 3, 4]
const array2 = [3, 4, 5, 6]

const array3 = array1.concat(array2)
const array4 = [...new Set(array3)]

console.log(array4)
console.log(typeof array4)
console.log(Array.isArray(array4))