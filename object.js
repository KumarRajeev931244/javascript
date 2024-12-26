// object => it store value in the form of key value pair. whereas in array we store value in the form of index.

// singleton object => object literal

// Symbol => it is a unique value that is used as an identifier for object properties. It is created using Symbol() function. It is used to create private properties in object. it is store inside [].
const mySymbol = Symbol('myPassword');

const user ={
    name: 'john',
    age: 30,
    [mySymbol]: 'myPassword123',
    email: 'jhon@gmial.com',
    city: 'mumbai',
    isLoggedIn: false,
    lastLoginDays: ['monday', 'tuesday', 'wednesday']
}

// method to access object property

// console.log(user.name, user.age, user.email);
// console.log(user['name'], user['age'], user['email']) 

// to change the value of object

user.name = 'smith';
// console.log(user.name);

// freeze => it is used to make object immutable. it is used to prevent object from being modified. it is used to make object read only.

// Object.freeze(user);

// by using the dot operator we can not change the existing value of object but we can add new property to object.
user.greting = function(){
    console.log('hello');
    
}

user.gretting = function(){
    console.log(`hello ${this.name}`)
}

// console.log(user.greting())
// console.log(user.gretting())

// const tinderUser = new Object(); // object constructor 

const tinderUser = {
    id: 1,
    name: 'rajeev',
    isLoggedIn: false
}

const regularUser = {
    email: 'rajeev@gmail.com',
    fullName:{
        userFullName: {
            firstName: 'rajeev',
            lastName: 'kumar'
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {
    1: 'one',
    2: 'two'
}
const obj2 = {
    3: 'three',
    4: 'four'
}

// assign => it is used to merge two or more object into one object. it is used to copy the value of one object to another. we have to pass empty object as first argument. Assume empty object as source object and other object as destination object.

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

// spread operator => it is used to merge two or more object into one object. it is used to copy the value of one object to another. we have to pass empty object as first argument. Assume empty object as source object and other object as destination object.

const obj3 = {...obj1, ...obj2, ...tinderUser}
// console.log(obj3)


// array within object
const users = [
    {
        id: 1,
        name: 'rajeev',
        email: 'rajeev@gmail.com'
    },
    {
        id: 2,
        name: 'kumar',
        email: 'kumar@gmail.com'
    },
    {
        id: 3,
        name: 'john',
        email: 'jhon@gmail.com'
    }
]

// console.log(users[1].email)

// console.log(Object.keys(tinderUser)) 
// console.log(Object.values(tinderUser))
// console.log(tinderUser.hasOwnProperty('name')) //it will return true if property is present in object otherwise false.

const course = {
    name: 'javascript',
    duration: '3 months',
    price: 10000,
    courseTeacher: 'rajeev',
}

// another way to access the object property

const {name, duration, price, courseTeacher} = course;

// we can destructuring the object property and store it in variable. we can another name to the property while destructuring.

const {name: firstName} = course;

// console.table({name, duration, price, courseTeacher})
// console.log(firstName)

{
    name: "rajeev"
    courseName: 'javascript'
    courseDuration: '3 months'
}