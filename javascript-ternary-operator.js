// 💻 Challenges

// Create a function that determines if a user is old enough to vote (age 18 or older).

const canVote = (age) => {return age >= 18 ? true : false}

console.log(canVote(7))         // false
console.log(canVote(18))        // true

// Create a function that takes in an array of numbers and determines if the number is odd or even.

const oddOrEvenValues = (array) => {
    return array.map(value => value % 2 === 0 ? "even" : "odd")
}

console.log(oddOrEvenValues([4, 1, 5, 6, 33, 5]))   // [ 'even', 'odd', 'odd', 'even', 'odd', 'odd' ]