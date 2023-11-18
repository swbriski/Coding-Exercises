// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

// Pseudocode
// Input: none
// Output: string

const marco = () => {
    return "polo"
}

console.log(marco())    // polo

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// Pseudocode
// Input: name
// Output: string interpolation

const greeting = (name) => {
    return `Welcome, ${name}!`
}

console.log(greeting("Sean"))   // Welcome, Sean!
console.log(greeting("Brian"))  // Welcome, Brian!
console.log(greeting("Remy"))   // Welcome, Remy!

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// Pseudocode
// Input: number
// Output: string

const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(oddOrEven(22))  // even
console.log(oddOrEven(0))   // even
console.log(oddOrEven(-5))  // odd
console.log(oddOrEven(31))  // odd

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Pseudocode
// Input: number
// Output: input tripled

const triple = (number) => {
    return number * 3
}

console.log(triple(5))      // 15
console.log(triple(0))      // 0
console.log(triple(-6))     // -18

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Pseudocode
// Input: two numbers
// Output: product

const multiply = (number1, number2) => {
    return number1 * number2
}

console.log(multiply(5, 6))     // 30
console.log(multiply(-5, 6))    // -30
console.log(multiply(5, 0))     // 0

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Pseudocode
// Input: two numbers
// Output: string interpolation

const divisibleBy = (number1, number2) => {
    if (number1 % number2 === 0) {
        return `${number1} is evenly divisible by ${number2}`
    } else {
        return `${number1} is not evenly divisible by ${number2}`
    }
}

console.log(divisibleBy(15, 3))     // 15 is evenly divisible by 3
console.log(divisibleBy(16, 5))     // 16 is not evenly divisible by 5
console.log(divisibleBy(21, -7))    // 21 is evenly divisible by -7

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Pseudocode
// Input: number
// Output: string

const assignGrade = (score) => {
    if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}

console.log(assignGrade(95))    // A
console.log(assignGrade(83))    // B
console.log(assignGrade(77))    // C
console.log(assignGrade(61))    // D
console.log(assignGrade(32))    // F

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Pseudocode
// Input: two strings
// Output: longer string

const isLonger = (string1, string2) => {
    if (string1.length > string2.length) {
        return string1
    } else if (string1.length < string2.length) {
        return string2
    } else if (string1.length === string2.length) {
        return "Both strings have the same length"
    }
}

console.log(isLonger("Apple", "Pear"))      // Apple
console.log(isLonger("Pear", "Banana"))     // Banana
console.log(isLonger("Peach", "Apple"))     // Both strings have the same length

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Pseudocode
// Input: two numbers
// Output: greater number

const greaterNum = (number1, number2) => {
    if (number1 > number2) {
        return number1
    } else if (number1 < number2) {
        return number2
    } else if (number1 === number2)
        return "Both numbers are the same value"
}

console.log(greaterNum(5, 7))   // 7
console.log(greaterNum(5, -7))  // 5
console.log(greaterNum(5, 5))   // Both numbers are the same value

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// Pseudocode
// Input: string
// Output: input in uppercase

const yelling = (string) => {
    return string.toUpperCase()
}

console.log(yelling("Sean"))    // SEAN
console.log(yelling("sean"))    // SEAN
console.log(yelling("SEAN"))    // SEAN

// 🏔 Stretch Goals

// The World Translator
// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure your function works for at least 5 languages.
// Have your function default to returning English.

// Pseudocode
// Input: language code
// Output: greeting in designated language code
// Default Output: greeting in English

// Language Codes
// de = German
// el = Greek
// en = English
// es = Spanish
// fr = French
// it = Italian

const helloWorld = (languageCode) => {
    if (languageCode && languageCode.toLowerCase() === "de") {
        return "Hallo Welt!"
    } else if (languageCode && languageCode.toLowerCase() === "el") {
        return "Γειά σου Κόσμε!"
    } else if (languageCode && languageCode.toLowerCase() === "en") {
        return "Hello World!"
    } else if (languageCode && languageCode.toLowerCase() === "es") {
        return "¡Hola Mundo!"
    } else if (languageCode && languageCode.toLowerCase() === "fr") {
        return "Bonjour le monde!"
    } else if (languageCode && languageCode.toLowerCase() === "it") {
        return "Ciao mondo!"
    } else {
        return "Hello World!"
    }
}

console.log(helloWorld("de"))   // Hallo Welt!
console.log(helloWorld("el"))   // Γειά σου Κόσμε!
console.log(helloWorld("en"))   // Hello World!
console.log(helloWorld("es"))   // ¡Hola Mundo!
console.log(helloWorld("fr"))   // Bonjour le monde!
console.log(helloWorld("it"))   // Ciao mondo!
console.log(helloWorld("ko"))   // Hello World!
console.log(helloWorld())       // Hello World!

// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person" <-- argument should be "person" or output should be "people"

// pluralizer(3, "people")
// // output: "3 people" <-- argument should be "person" or output should be "peoples"

// Pseudocode
// Input: number, singular noun
// Output: string interpolation


const pluralizer = (number, noun) => {

    let vowelArray = noun.toLowerCase().split("").filter(vowel => {
        return (
            vowel === "a" || 
            vowel === "e" ||
            vowel === "i" ||
            vowel === "o" ||
            vowel === "u"
        )
    })

    if (number === 1) {
        return `1 ${noun.toLowerCase()}`
    } else if (number >= 0) {
        // Plural is same as Singular
        if (noun.toLowerCase() === "aircraft" || noun.toLowerCase() === "cattle" || noun.toLowerCase() === "deer" || noun.toLowerCase() === "fish" || noun.toLowerCase() === "moose" || noun.toLowerCase() === "sheep" || noun.toLowerCase() === "trout") {
            return `${number} ${noun.toLowerCase()}`
        // Special Pairs: child, foot, goose, man, mouse, person, tooth, woman
        } else if (noun.toLowerCase() === "child") {
            return `${number} children`
        } else if (noun.toLowerCase() === "foot") {
            return `${number} feet`
        } else if (noun.toLowerCase() === "goose") {
            return `${number} geese`
        } else if (noun.toLowerCase() === "man") {
            return `${number} men`
        } else if (noun.toLowerCase() === "mouse") {
            return `${number} mice`
        } else if (noun.toLowerCase() === "person") {
            return `${number} people`
        } else if (noun.toLowerCase() === "tooth") {
            return `${number} teeth`
        } else if (noun.toLowerCase() === "woman") {
            return `${number} women`
        // ends in S, SH, CH, X, or ZZ => add -ES to end
        } else if (noun[noun.length - 1].toLowerCase() === "s" || noun.slice(noun.length - 2).toLowerCase() === "sh" || noun.slice(noun.length - 2).toLowerCase() === "ch" || noun[noun.length - 1].toLowerCase() === "x" || noun.slice(noun.length - 2).toLowerCase() === "zz") {
            return `${number} ${noun.toLowerCase()}es`
        // ends in Z => add -ZES
        } else if (noun[noun.length-1].toLowerCase() === 'z') {
            return `${number} ${noun.toLowerCase()}zes`
        // ends in FE or is elf, leaf, loaf, wolf => remove F or FE and add -VES to end
        } else if (noun.slice(noun.length-2).toLowerCase() === "fe" || noun.toLowerCase() === "elf" || noun.toLowerCase() === "leaf" || noun.toLowerCase() === "loaf" || noun.toLowerCase() === "wolf") {
            return `${number} ${noun.slice(0, noun.toLowerCase().lastIndexOf("f")).toLowerCase()}ves`
        // ends in CONSONANT + Y => remove Y and add -IES to end
        } else if (vowelArray.includes(noun[noun.length - 2].toLowerCase()) === false && noun[noun.length-1].toLowerCase() === "y") {
            return `${number} ${noun.slice(0, noun.length - 1).toLowerCase()}ies`
        // Exceptions to CONSONANT + O rule: auto, piano, solo
        } else if (noun.toLowerCase() === "auto" || noun.toLowerCase() === "piano" || noun.toLowerCase() === "solo") {
            return `${number} ${noun.toLowerCase()}s`
        // Ends in CONSONANT + O => add -ES to end
        } else if (vowelArray.includes(noun[noun.length - 2].toLowerCase()) === false && noun[noun.length-1].toLowerCase() === "o") {
            return `${number} ${noun.toLowerCase()}es`
        // General Rule => add -S to end
        } else {
            return `${number} ${noun.toLowerCase()}s`
        }
    }
}


console.log(pluralizer(6, "aircraft"))      // 6 aircraft
console.log(pluralizer(2, "CATTLE"))        // 2 cattle
console.log(pluralizer(1, "Deer"))          // 1 deer
console.log(pluralizer(8, "fish"))          // 8 fish
console.log(pluralizer(7, "moose"))         // 7 moose
console.log(pluralizer(0, "SHEEP"))         // 0 sheep
console.log(pluralizer(1, "Trout"))         // 1 trout
console.log(pluralizer(2, "child"))         // 2 children
console.log(pluralizer(1, "Child"))         // 1 child
console.log(pluralizer(8, "foot"))          // 8 feet
console.log(pluralizer(1, "FOOT"))          // 1 foot
console.log(pluralizer(0, "GOOSE"))         // 0 geese
console.log(pluralizer(1, "goose"))         // 1 goose
console.log(pluralizer(2, "man"))           // 2 men
console.log(pluralizer(1, "MAN"))           // 1 man
console.log(pluralizer(8, "mouse"))         // 8 mice
console.log(pluralizer(1, "Mouse"))         // 1 mouse
console.log(pluralizer(2, "person"))        // 2 people
console.log(pluralizer(1, "Person"))        // 1 person
console.log(pluralizer(8, "tooth"))         // 8 teeth
console.log(pluralizer(1, "TOOTH"))         // 1 tooth
console.log(pluralizer(0, "woman"))         // 0 women
console.log(pluralizer(1, "Woman"))         // 1 woman
console.log(pluralizer(6, "class"))         // 6 classes
console.log(pluralizer(2, "FLASH"))         // 2 flashes
console.log(pluralizer(1, "Ditch"))         // 1 ditch
console.log(pluralizer(8, "box"))           // 8 boxes
console.log(pluralizer(7, "FIZZ"))          // 7 fizzes
console.log(pluralizer(1, "quiz"))          // 1 quiz
console.log(pluralizer(6, "Quiz"))          // 6 quizzes
console.log(pluralizer(1, "Wife"))          // 1 wife
console.log(pluralizer(6, "WIFE"))          // 6 wives
console.log(pluralizer(8, "Elf"))           // 8 elves
console.log(pluralizer(1, "ELF"))           // 1 elf
console.log(pluralizer(2, "Leaf"))          // 2 leaves
console.log(pluralizer(1, "LEAF"))          // 1 leaf
console.log(pluralizer(8, "LOAF"))          // 8 loaves
console.log(pluralizer(1, "Loaf"))          // 1 loaf
console.log(pluralizer(0, "WOLF"))          // 0 wolves
console.log(pluralizer(1, "Wolf"))          // 1 wolf
console.log(pluralizer(6, "CITY"))          // 6 cities
console.log(pluralizer(1, "City"))          // 1 city
console.log(pluralizer(8, "Auto"))          // 8 autos
console.log(pluralizer(1, "AUTO"))          // 1 auto
console.log(pluralizer(2, "PIANO"))         // 2 pianos
console.log(pluralizer(1, "Piano"))         // 1 piano
console.log(pluralizer(8, "Solo"))          // 8 solos
console.log(pluralizer(1, "SOLO"))          // 1 solo
console.log(pluralizer(0, "Tomato"))        // 0 tomatoes
console.log(pluralizer(1, "TOMATO"))        // 1 tomato
console.log(pluralizer(5, "cat"))           // 5 cats
console.log(pluralizer(1, "dog"))           // 1 dog
console.log(pluralizer(9, "Dog"))           // 9 dogs
