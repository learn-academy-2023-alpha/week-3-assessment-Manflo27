// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("myNumber", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    expect(myNumber()).toEqual([1, 1, 2, 3, 5, 8])
  })
})


// // ReferenceError: myNumber is not defined


// // Pseudocode : Create a function named myNumber
// // Input Takes in a number (greater than 2)
//    For loop to iterate through the 'array" and .push to add to the end of the array, at this point im confused on why its not working.
// // Outpuy : Returns the array.length containing the numbers of the Fibonacci sequenece [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


const myNumber= (num) => {
let array = [0,1];
for (i = 2; i < num ; i ++){
  array.push(array[i - 1] + array[i - 2])
  return array[i]
}}


describe("thisNumber", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    expect(thisNumber()).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// ReferenceError: thisNumber is not defined

// // Pseudocode : Create a function named thisNumber
// // Input Takes in a number (greater than 2)
// // Outpuy : Returns the array.length containing the numbers of the Fibonacci sequenece. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const thisNumber= (num1) => {
  let array = [0,1];
  for (i = 2; i < num1 ; i ++){
    array.push(array[i - 1] + array[i - 2])
    return array[i]
  }}
  








// // b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}

// Expected output: [15, 15, 20, 30, 30, 60, 90]

describe("leastNumber", () => {
  it("returns an array of the values sorted from least to greatest.", () => {
    expect(leastNumber(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  })

})
// ReferenceError: leastNumber is not defined
// Pseudocode : 1. Create a function called leastNumber
//              2. Input is the object of studyMinutesWeek1 sunday through saturday
//              3.The Object.values returns an array of values of the enumerable properties of an object 
//              4. Output is the array of the values sorted from least to greatest.

const leastNumber = () => {
  return (Object.values(studyMinutesWeek1).sort((a, b) => a - b))
}

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}

describe("lowerNumber", () => {
  it("returns an array of the values sorted from least to greatest.", () => {
    expect(lowerNumber(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// ReferenceError: lowerNumber is not defined
// Pseudocode : 1. Create a function called lowerNumber
//              2. Input is the object of studyMinutesWeek2 sunday through saturday
//              3.The Object.values returns an array of values of the enumerable properties of an object 
//              4. Output is the array of the values sorted from least to greatest.

const lowerNumber = () => {
  return (Object.values(studyMinutesWeek2).sort((a, b) => a - b))
}


// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.


// Expected output: [100, 83, 60, 51]
const accountTransactions1 = [100, -17, -23, -9]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

describe("numSum", () => {
  it("returns an array of the accumulating sum.", () => {
    expect(numSum()).toEqual([100, 83, 60, 51])
  })
})


// ReferenceError: numSum is not defined
// Pseudocode : Create a function called numSum
//              Input : Takes in an array of numbers, use .map to iterate over array. Use reduce() to return the sum
//              Output: Returns an array of the accumulating sum, at this point I dont know the next step.

const numSum = (array) => { 
 return array.map((value) => value.reduce()) }
  
 
 describe(mySum, () => {
  it("returns an array of the accumulating sum.", () => {
    expect(numSum()).toEqual([250, 161, 261, 165])
  })
})

// Pseudocode : Create a function called mySum
//              Input : Takes in an array of numbers, use .map to iterate over array. Use reduce() to return the sum
//              Output: Returns an array of the accumulating sum


const mySum = (array) => { 
  return array.map((value) => value.reduce())}

const accountTransactions3 = []
// Expected output: []
describe("myEmpty", () => {
  it("returns an empty array", () => {
    expect(myEmpty()).toEqual([])
  })
})

const myEmpty = (array) => {
  return array.map((value) => value.reduce())
}
// ReferenceError: myEmpty is not defined

// Tests:       4 failed, 2 passed, 6 total