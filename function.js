// function
// in js empty string('') is false and undefined is false. 

function hello(){
    console.log('hello')
}

// hello //it will give you the function reference.
// hello()

function addTwoNumber(number1, number2){
    console.log(number1 + number2)
}

// addTwoNumber(2, 3)

// when we don't pass any parameter to the function, it will take undefined.

function userName(username){
    return `${username} is a good boy and login.`
}

// console.log(userName('Rajeev'))

function loginUserName(username){
    if(username === undefined){
        return 'please provide username'
    }
    else{
        return `welcome ${username}`
    }

}
// console.log(loginUserName('Manisha'))


// (...args) is used to pass multiple arguments in the function.
// (...) => it is called rest operator and also called spread operator.
function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(3, 4, 5, 6, 7, 8, 9, 10));  // it will take all the arguments in the array.


const user = {
    name: 'Rajeev',
    age: 25,
    address: 'Delhi'
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
    
}

// handleObject(user)

// we can pass object is parameter in the function.
// handleObject({
//     name: 'Manisha',
//     age: 25
// })

// we can pass array in the function argument.

const newArray = [1, 2, 3, 4, 5]
function handleArray(arr){
    console.log(arr[1])
}
// handleArray(newArray)

// ++++++++++++++++++++++++++ global scope and local scope +++++++++++++++++++++++++++++


 // local scope can access the global scope but global scope can't access the local scope.

 function one(){
    const userName = 'Rajeev'
    function two(){
        const website = 'www.google.com'
        console.log(userName)
    }
    // console.log(website); // it will give you the error because website is not defined in the local scope.
     two()
 }
//  one()

//we can store the function in the variable.

const addTwoNumber2 = function(number1, number2){
    return number1 + number2
}

// console.log(addTwoNumber2(3,4));

// hoisting => it is the process of moving the function declaration to the top of the file.  


// ++++++++++++++++++++++++++++++ arrow function +++++++++++++++++++++++++++++

// this keyword in the arrow function. this refers to the current context.
const user1 = {
    username: 'Rajeev',
    price: 200,

    welcomeMessage: function(){
        console.log(this)
        console.log(`welcome ${this.username}`)
    }

}

// user1.welcomeMessage()
// user1.username = 'Manisha'
// user1.welcomeMessage()
//console.log(this); //it will give you the window object.

// function chai(){
//     console.log(this)
// }
// chai()

// () => {}  // arrow function

// type 1

// if curly braces is used we have to used return keyword.
const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(2,3));

//type 2 (implict return)


// const addThree = (num1, num2) => num1 + num2
// const addThree = (num1, num2) => (num1 + num2)

//we have to bind the object in paranthesis .
// const addThree = (num1, num2) => ({username: 'rajeev'})
// console.log(addThree())

// ++++++++++++++++++++++++++++++++++++ immediately invoke function expression (IIFE) ++++++++++++++++++++++

//  ()()
// IIFE is used to remove the global scope pollution.
//It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

// 1. The first is the anonymous function with lexical scope enclosed within the grouping operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


// IIFE can be declared as
// IIFE should terminate by semicolon after use.
(function chai(){
    console.log(`DB connected`);
    
})();

((name) => {
    console.log(`Db connected by ${name}`)
})('rajeev');