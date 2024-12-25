/**
 * number
 * bigint
 * string => ""
 * bollean => true/flase
 * null => standalone value
 * undefined => abhi value assign nahi hui hai
 * symbol => unique
 * 
 * object
 * array
 * 
 * 1 => true and 0 => false
 * "" => false
 * "rajeev" => true
 * 
 * primitive(call by value) => String , number, boolean, null, undefined, Symbol, bigInt
 * non - primitive (reference) => array, objects, functions
 * 
 *  
 */

// console.log(typeof("hitesh"))
// console.log(typeof(null))
// console.log(typeof(undefined))



//                  conversion

// let score = 33
// let score = undefined
// let score = true
// let score = "234@!a"
// let score = Number(33)
// console.log(score);
// console.log(typeof(score));

// let isLoggedIn = 0

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let someNumber = 22
// let stringNumber = String(someNumber)
// console.log(typeof(stringNumber));


//  ************************ operation **********************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = "rajeev"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); 
// console.log(1 + 3 + "2");

let gameCounter = 100
// gameCounter++
// ++gameCounter
// console.log(gameCounter);

// console.log("2" > 1);
// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);


// strick check => (===) : it check strickly by checking value and their datatype


const score = false
const scoreValue = 100.3

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

// array
const heroes = ["saktiman", "nagraj", "doga"]

// object

const object = {
    name: "rajeev",
    age: 32
}

// function

const add = function (){
    console.log("hello world");
}

// console.log(typeof(add));

//  **************************** memory allocation ***********************

// stack => primitive data type, 
// heap => non-primitive data type

let myYoutubename = "rajeevdot.com"
let anotherName = myYoutubename

console.log(anotherName);





