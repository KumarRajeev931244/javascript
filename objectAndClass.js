// javascript is prototype based language.

/**
 * parts of oop
 * -object literals
 * 
 * -constructor function
 * -prototypes
 * -classes
 * -instances (new, this)
 * 
 * ## 4 pillars
 * Abstraction
 * Encapsulation 
 * inheritance
 * polymorphism(ek method ke bahut sare roop)
 * 
 */

const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,
    
    getUserDetails: function(){
        // console.log('got user details from database');
        // console.log(`username : ${this.username}`);
        // console.log(this);
        
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIN){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN

    return this
}

const userOne = User("hitesh", 4, true)
const userTwo = User("rajeev", 11 , false)
console.log(userOne);

// constructor function hume naya instance return karta hai
// jab hum new keyword ko introduce karte hai toh empty object create hota hai.

