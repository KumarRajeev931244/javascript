// Date 

let myDate = new Date();

// toString() => return date in string format
// console.log(myDate.toString());

// toDateString() => return date in string format
// console.log(myDate.toDateString());

//toJSON() => return date in JSON format
// console.log(myDate.toJSON());

// toLocalString() => return date in local string format
// console.log(myDate.toLocaleString());

console.log(typeof(myDate)); // object

// create date

let myCreateDate  = new Date(2023, 0, 23)
// console.log(`Create Date: ${myCreateDate}`);

let myTimeStamp = Date.now();
// console.log(myTimeStamp)

let newDate = new Date();
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: 'long'
})



