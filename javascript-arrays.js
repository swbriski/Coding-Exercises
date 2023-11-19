// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:
var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)            // [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of the array without altering the original array.
var groceryList = ["chips", "dip", "cookies"]

console.log(groceryList.concat("granola"))  // [ 'chips', 'dip', 'cookies', 'granola' ]
console.log(groceryList)                    // [ 'chips', 'dip', 'cookies' ]

// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.filter(value => value === "chips" || value === "dip"))  // [ 'chips', 'dip' ]
console.log(groceryList.slice(0, 2))    // [ 'chips', 'dip' ]

// Write the code that will add "beans" to the "chips" and "dip" array.
groceryList.slice(0, 2).push("beans")
console.log(groceryList)                // [ 'chips', 'dip', 'cookies' ]


// Consider the variable:
var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)                    // [ 0, 2, 4, 6, 8, 10 ]

// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)                    // [ 0,  2,  4, 6, 8, 10, 12 ]

// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)                    // [ 2, 4, 6, 8, 10, 12 ]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var numbers = [2, 4, 6, 8, 10]

console.log([0].concat(numbers))        // [ 0, 2, 4, 6, 8, 10 ]
console.log(numbers)                    // [ 2, 4, 6, 8, 10 ]

// Consider the variable:
var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))          // 0

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))      // 5

// Write the code that returns the number at the third index.
console.log(numSet[3])                  // 8

// Consider the variable:
var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))        // yarra

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed)              // [ 'a', 'r', 'r', 'a', 'y' ]

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))    // a*r*r*a*y

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))     // array

// Create two arrays consisting of three first names of your cohort members in each array.
var array1 = ["Eric", "Derek", "Franz"]
var array2 = ["Enrique", "Patsy", "Markayel"]

// Write the code that sorts the names in alphabetical order.
console.log(array1.sort())              // [ 'Derek', 'Eric', 'Franz' ]
console.log(array2.sort())              // [ 'Enrique', 'Markayel', 'Patsy' ]

// Write the code that sorts the names in reverse alphabetical order.
console.log(array1.sort().reverse())    // [ 'Franz', 'Eric', 'Derek' ]
console.log(array2.sort().reverse())    // [ 'Patsy', 'Markayel', 'Enrique' ]

// Write the code that sorts all the names in alphabetical order in a single array.
console.log(array1.concat(array2).sort())   // [ 'Derek', 'Enrique', 'Eric', 'Franz', 'Markayel', 'Patsy' ]

// Consider the variables:
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.

// With a for loop
for (i = 1; i <= numbers.length - 1; i = i + 2) {
    console.log(numbers[i])
}   // 221, 7, 87

// With Higher Order Functions
console.log(numbers.filter((value, index) => index % 2 === 1))  // [ 221, 7, 87 ]

// Write the code that adds the values from odd indexes into the oddIndexes array.

// With a for loop
for (i = 1; i <= numbers.length - 1; i = i + 2) {
    oddIndexes.push(numbers[i])
}

console.log(oddIndexes)             // [ 221, 7, 87 ]

// With Higher Order Functions
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

numbers.filter((value, index) => index % 2 === 1).map(value => oddIndexes.push(value))
console.log(oddIndexes)             // [ 221, 7, 87 ]
