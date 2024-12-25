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








