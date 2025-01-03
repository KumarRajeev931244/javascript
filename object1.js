function multipleBy5(num){
    return num*5
}

multipleBy5.power = 3

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

// to define function

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser('chai', 25)
const tea = new createUser('tea', 250)

chai.printMe()

/**
 * behind the scene of new keyword
 * 
 * A new object is created: the new keyword initiates the creation of a new javascript object.
 * 
 * A prototype is linked: the newely created object gets linked to the prototype property of the constructor fucntion. this means that it has access to properties and methods defined on the constructor prototype.
 * 
 * the constructor is called: the constructor function is called with the specified argument and this is bound to the newly created object. if no explict return value is specified from the constrcutor, javascript assume this, the newly created object, to be the intended return value.
 * 
 * the new object is returned: after the constructor function has been called, if it doesnot return a non-primitive value(object,array, function etc.) the newely created object is returned.
 */
