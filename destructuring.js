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