// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 > 67/2)    // false

// Does 5 evaluate to the same as "5"?
console.log(5 == "5")       // true

// Does 5 strictly equal "5"?
console.log(5 === "5")      // false

// Does !3 strictly equal 3?
console.log(!3 === 3)       // false

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7)     // true

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10)    // true

// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"))     // true

// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"))     // false

// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l")         // false

// Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L")                 // true
console.log("LEARN"[0].toLowerCase() === 'l')   // true

// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

const price = 100               // in budget
// const price = 97             // in budget
// const price = 103            // not in budget

if (price <= 100) {
    console.log("in budget")
} else {
   console.log("not in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = true               // eat food
// var hungry = false           // keep coding

if (hungry) {
    console.log("eat food")
} else {
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "Green"              // go
// var trafficLight = "YELLOW"          // slow down
// var trafficLight = "RED"             // stop

if (trafficLight.toLowerCase() === "green") {
    console.log("go")
} else if (trafficLight.toLowerCase() === "yellow") {
    console.log("slow down")
} else if (trafficLight.toLowerCase() === "red") {
    console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// const num1 = 4
// const num2 = 7                   // 7
// const num1 = 32
// const num2 = 3                   // 32
const num1 = 54
const num2 = 54                     // the numbers are the same

if (num1 > num2) {
    console.log(num1)
} else if (num1 < num2) {
    console.log(num2)
} else if (num1 === num2) {
    console.log("the numbers are the same")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var number = 0          // zero
var number = 3          // odd
var number = -3         // odd
var number = 2          // even

if (number === 0) {
    console.log("zero")
} else if (number % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

// 🏔 Stretch Goals
// Write a conditional statement for the following prompts.

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// const grade = 0                  // no grade available
// const grade = 23                 // F
// const grade = 61                 // D
// const grade = 73                 // C
// const grade = 85                 // B
// const grade = 92                 // A
const grade = 100                   // perfect score

if (grade >= 100) {
    console.log("perfect score")
} else if (grade > 90) {
    console.log("A")
} else if (grade > 80) {
    console.log("B")
} else if (grade > 70) {
    console.log("C")
} else if (grade > 60) {
    console.log("D")
} else if (grade === 0) {
    console.log("no grade available")
} else {
    console.log("F")
}


// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var data = true             // boolean
var data = 43               // number
var data = "43"             // string

if (typeof data === "boolean") {
    console.log("boolean")
} else if (typeof data === "number") {
    console.log("number")
} else if (typeof data === "string") {
    console.log("string")
}

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

// Pseudocode
// length >= 12 AND includes ! => mighty strong
// length >= 8 OR includes ! => strong enough
// else => not valid

var password = "orange"                     // That is not a valid password.
var password = "orange!"                    // That password is strong enough.
var password = "colorful"                   // That password is strong enough.
var password = "midnightblack"              // That password is strong enough.
var password = "midnightblack!"             // That is a mighty strong password!

if (password.length >=12 && password.includes("!")) {
    console.log("That is a mighty strong password!")
} else if (password.length >= 8 || password.includes("!")) {
    console.log("That password is strong enough.")
} else {
    console.log("That is not a valid password.")
}