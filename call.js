function setUserName(username){
    // complex database call
    this.username = username
    console.log('called');
    
}

function createUser(username, email, password){
    // calling another object
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
