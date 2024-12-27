// array

// () => parantheses
// {} => curly braces
// [] => square brackets
// <> => angle brackets

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(`myArray: ${myArray[2]}`);

// const myHero = ["saktiman", "nagraj", "doga", "superman", "batman"]

// push() => add element at the end of the array

// myHero.push("spiderman")

// pop() => remove element from the end of the array
// myHero.pop();
// console.log(`myHero: ${myHero}`);

// unshift() => add element at the beginning of the array
// myHero.unshift("pokemon");
// console.log(`myHero: ${myHero}`);

// shift() => remove element from the beginning of the array
// myHero.shift();
// console.log(`myHero: ${myHero}`);

// splice() => add or remove element from the array and it will return the removed element. first it take the index from where you want to start and second parameter is how many element you want to remove and third parameter is the element you want to add. modify original array.
;
// console.log(`myHero: ${myHero}`);

// console.log(myHero.splice(2,3, "ironmen", "hulk"));
// console.log(`myHero: ${myHero}`);

// slice() => it will return the new array from the given index to the end of the array. it does not include the end index. it will not modify the original array
// console.log(myHero.slice(2,4))

// join() => it will join the array element with the given separator and return the string

// console.log(myHero.join(" -"))

const marverHero = ["ironman", "thor", "hulk", "captain america", "black widow"];

const indianHero = ["nagraj", "doga", "superman", "batman", "junior g"];

marverHero.push(indianHero) // it will return array inside array

marverHero.concat(indianHero) 
// console.log(`all hero: ${marverHero}`);

// spread operator => it will spread the array element and return the new array. it will not modify the original array.

const allHero = [...marverHero, ...indianHero];
// console.log(`all hero: ${allHero}`);


// flat() => it will return the new array by removing the nested array. it will not modify the original array.
const anotherArray = [1, 2, 3, [4, 5,6], 7, [6, 7, 8]];
const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

Array.isArray("Rajeev")   // false
Array.from("rajeev")     // ["r", "a", "j", "e", "e", "v"]
Array.from({name: "rajeev"}) // []



// +++++++++++++++++++++++++ array loop +++++++++++++++++++++++++++++++


/** for of => The for...of loop is designed to iterate over iterable objects. An iterable object is any object that defines a sequence of values, such as:

Arrays: Iterates over the elements of the array.
Strings: Iterates over the characters of the string.
Maps: Iterates over the key-value pairs of the Map.
Sets: Iterates over the values of the Set.
TypedArrays (e.g., Uint8Array): Iterates over the numeric values.
User-defined iterables: Objects that implement the iterable protocol.*/ 

const arr = [1, 2, 3, 5, 6]

// for (const num of arr) {
//     console.log(`the value of array: ${num}`);   
// }

const superHero = ['shaktiman', 'naagraj', 'juniour g', 'baalveer']

// for (const hero of superHero) {
//     console.log(`Indian super Heroes are: ${hero}`);   
// }

/**
 * maps => Map is a data structure that stores key-value pairs, where each key is unique. Maps are similar to objects in that they hold key-value associations, but they differ in several important ways, offering more flexibility and control.
 */

const map = new Map()       // creating a map

map.set('key1', 'rajeev')   // adding element in the map.
map.set('key2', 'value2')

// console.log(`the value of key1: ${map.get('key1')}`); // getting the value of map.

// for (const [key, value] of map) {
//     console.log(`the keys: ${key} and value: ${value}`);
// }
// map.set('phoneNo1', 9312445693)
// map.set('phoneNo', 9312445693)
// for (const [key, value] of map) {
//     console.log(`the keys: ${key} and value: ${value}`);  
// }

const progrmming = ['js', 'cpp', 'ruby']
for (const key in progrmming) {
    // console.log(progrmming[key]); //js cpp ruby
    // console.log(key); // 0 1 2     
}

/**
 * forEach => In JavaScript, forEach is a method available for arrays (and some array-like objects like NodeLists) that allows you to iterate over each element in the array and execute a provided function once for each element. It's a concise and readable way to perform operations on every item in an array.
 */

const codingLanguage = ['js', 'rubby', 'java', 'rubby', 'cpp']
// codingLanguage.forEach(element => {
//     console.log(`the element is ${element}`);   
// });


// [{}, {}, {}]

const myCoding = [
    {
        languageName: 'javaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

// myCoding.forEach( (item) => {
//     // console.log(item.languageName );
//     // console.log(item);
// } )


const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * filter() => In JavaScript, the filter() method is a powerful array method that creates a new array containing only the elements from the original array that pass a certain test (provided as a function). It's a non-mutating method, meaning it doesn't modify the original array.
 */

const filterValue = myNumber.filter( (num) =>  (num%2) == 0 )
// console.log(`filter value which is divisible by 2: ${filterValue}`);

const superPower = ['shaktiman', 'motu potlu', 'sinchan', 'raja']
const filterHero = superPower.filter( (hero) => { 
    if(hero.length > 4 ){
        return hero
    }
  } )
// console.log(filterHero);



const myNumber2 = [1, 2, 3, 4, 5, 6]
const newNum = myNumber2.map((num) => num * 10)
// console.log(newNum);


/**
 * reducer() =>
 * 
In JavaScript, the reduce() method is a powerful array method that executes a provided "reducer" function for each element of the array, resulting in a single output value. It's used for accumulating or combining array elements into a single result, such as a sum, product, concatenation, or any other derived value.

Syntax: array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]);
callback: The "reducer" function that is executed for each element in the array.
accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.   
currentValue: The current element being processed in the array.
currentIndex (Optional): The index of the current element being processed.
array (Optional): The array reduce was called upon.
initialValue (Optional): A value to be used as the first argument to the first call of the callback. If no initialValue is supplied, the first element of the array will be used as the initial accumulator and the iteration will start from the second element.   
How it Works:

The reduce() method iterates over the array from left to right. In each iteration, it calls the callback function with the accumulator and the currentValue. The callback function returns a new value, which becomes the accumulator for the next iteration.
 */
const myNums = [1, 2, 3]
// const total = myNums.reduce(function(acc, currentValue){
//     console.log(`accumulator ${acc} and currentValue ${currentValue}`);
    
//     return acc + currentValue
// }, 10)


// console.log(total);

const shoppingCart = [
    {
        courseName: 'js course',
        price: 3999
    },
    {
        courseName: 'py course',
        price: 2999
    },
    {
        courseName: 'c++ course',
        price: 1500
    }
]

const totalCoursePrice = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(totalCoursePrice);





