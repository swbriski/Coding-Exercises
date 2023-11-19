// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]

const mult3 = (array) => {
    return array.map(value => value * 3)
}

console.log(mult3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

const onlyOddNumbers = (array) => {
    return array.filter(value => value % 2 !== 0)
}

console.log(onlyOddNumbers(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// // output: "nicework"

const combinedLetters = (array) => {
    return array.filter(value => typeof value === "string").join("")
}

console.log(combinedLetters(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// // output: 10

const addThese2 = []
// // output: 0

const sumValues = (array) => {
    let sum = 0
    array.forEach(value => sum = sum + value)
    return sum
}

console.log(sumValues(addThese1))
console.log(sumValues(addThese2))

// Create a function that takes in an array of numbers and returns the index of the largest number.

const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

const indexOfHighestNumber = (array) => {
    let highestNumber = indexHighestNumber[0]
    array.forEach(value => {
        if (value > highestNumber) {
            highestNumber = value
        }
    })
    return array.indexOf(highestNumber)
}

console.log(indexOfHighestNumber(indexHighestNumber))

// 🏔 Stretch Goals

// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

const noDuplicates = (array1, array2) => {
    let newArray = []
    let combinedArray = array1.concat(array2)

    combinedArray.forEach(value => {
        if (newArray.includes(value) === false) {
            newArray.push(value)
        }
    })

    return newArray
}

console.log(noDuplicates(arr1, arr2))

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

const arrayLength = 4
const arrayValue = 11
// // output: [11, 11, 11, 11]

const arrayConstructor = (length, value) => {
    let newArray = []
    for (i = 1; i <= length; i++) {
        newArray.push(value)
    }
    return newArray
}

console.log(arrayConstructor(arrayLength, arrayValue))

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

const addUp3 = 600
// // output: 180300

const addUp = (number) => {
    sum = 0
    for (i = 1; i <= number; i++) {
        sum = sum + i
    }
    return sum
}

console.log(addUp(addUp1))
console.log(addUp(addUp2))
console.log(addUp(addUp3))