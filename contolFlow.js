// <, >, <=, >=, ==, !=, ===, !=

const balance = 1000
// if(balance > 500) console.log("test");

// if(balance<500){
//     console.log(`less than`);
// }

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log(`allow to purchase courses.`);
    
}

// falsy value => false, 0, -0, BigInt, "", null, undefined, NaN
// truthy value => "0", "false", " ", [], {}, function(){}

// for checking object is empty or not

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log(`object is empty`);
    
}

// for checking array is empty

const arr = []
if(arr.length === 0){
    console.log('array is empty');
    
}

// nullish coalescing operator(??): null undefined => it is defined for NULL and Undefined/

let val1;
// val1 = 5 ?? 10   // 5
// val1 = null ?? 10  //10
// val1 =undefined ?? 15

// console.log(`nullish coalescing ${val1}`);


// Terniary Operator(condition ? true : false)

let red = null ?? "stop"
// red === "stop" ? console.log("stop") : console.log("run");

