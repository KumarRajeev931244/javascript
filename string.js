/**
 * string can be represented in 2 ways => single quote('') or double quote("")
 */

const name = 'rajeev'
const name1 = "rajeev"
// console.table({name, name1})
// console.log(`name: ${name}, name1: ${name1}`);

const gameName = new String('pubg')
// console.log(`gameName: ${gameName}`);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

const newString = gameName.substring(0,2)
// console.log(newString);

const anotherString = gameName.slice(-4,4)
// console.log(anotherString);

// replace => it will replace the first occurance of the string and return the new string. it can be used with regular expression
let myName = '          rajeev kumar'
let myName1 = myName.replace('kumar', 'mishra')
// console.log(`myfullname: ${myName1}`);

// trim => it will remove the white spaces from the start and end of the string

let myName2 = myName.trim()
// console.log(`myName2: ${myName2}`);


// includes => it will return true if the string contains the substring else false
let myName3 = myName.includes('mukesh')
// console.log(`myName3: ${myName3}`);


// split => it will split the string based on the separator and return the array
let gameName2 = 'freefire is a battle royale game'
// console.log(gameName2.split('--'));








