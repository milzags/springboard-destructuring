//object destructuring q

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
////let {numPlanets, yearNeptuneDiscovered} = facts;

//console.log(numPlanets) --> returns 8
//console.log(yearNeptuneDiscovered) --> returns 1846


//object destructuring 2
//What does the following code return/print?

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let { numPlanets, ...discoveryYears } = planetFacts;

//console.log(discoveryYears) --> returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
// we extract numPlanets and store the rest of the object in discoveryYears. When we log
// discovery years we get an object with the other two k-v pairs.

//object destructuring 3
// what does the following code return/print:

function getUserData({ firstName, favoriteColor = "green" }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) // Your name is Alejandro and you like purple.
getUserData({ firstName: "Melissa" }) // Your name is melissa and you like Green
getUserData({}) // your name is undefined and you like green


// Array Destructuring 1
//what does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

// Array Destructuring 2
// What does the following code return/print
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // ['bright copper keetles', 'warm woolen mittens', 'brown paper packages tied up with strings']


//array destructuring 3
//what does the following code print? 
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [20,30] = [30,20]; --> prints the array [10,30,20]


//assigning variables to object properties:
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};


var a = obj.numbers.a;
var b = obj.numbers.b;

//refactor for ES2015 version of code

const obj = {
    numbers {
        a: 1,
        b: 2,
    };
  };

// ES 2015 version
let { numbers: { a: 1, b: 2} } = obj;
//OR
const { a, b } = obj.numbers;

//ES5 array swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//write a one line version in ES2015 format
[arr[0], arr[1] = arr[1], arr[0]];

// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array

// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)

function raceResults([first, second third, ...rest]) {
    return { 
        first, 
        second, 
        third,
        rest,
    }
};

//as an arrow function:
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});