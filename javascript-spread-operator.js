// 💻 Challenges
// Consider this function:

// const combineArrays = (arrOne, arrTwo) => {
//   return arrOne.concat(arrTwo)
// }

// Refactor this function to use the spread operator to combine the arrays.

const combineArrays = (arrOne, arrTwo) => {
    return [...arrOne, ...arrTwo]
}

console.log(combineArrays([2, 4, 2], [4, 6, 11]))   // [ 2, 4, 2, 4, 6, 11 ]

// Consider this function:

// const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
//   return arrOne
//     .concat(arrTwo)
//     .concat(arrThree)
//     .filter((num) => num % 2 !== 0)
// }

// Refactor this function to use the spread operator to combine the array arguments.

// const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
//     return [...arrOne, ...arrTwo, ...arrThree].filter(num => num % 2 !== 0)
// }

// console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))   // [ 3, 5, 5, 7, 5 ]

// 🏔 Stretch Goals

// Recall the combineAndFilterOdd() function from the previous exercise. Refactor the function to take any number of arguments.

const combineAndFilterOdd = (...arrays) => {
    return arrays.flat().filter(value => value % 2 !== 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6])) // [ 3, 5, 5, 7, 5 ]