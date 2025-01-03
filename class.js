// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     capitalization(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new user("rajeev", "chai@gmail.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.capitalization());

// behind the secence

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
user.prototype.changeUserName = function(){
     return `${this.username.toUpperCase()}`
}

const tea = new user("tea", "tea@gmail.com", "123")
console.log(tea.changeUserName());

