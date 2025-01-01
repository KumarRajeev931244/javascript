/**
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
 * 
 * A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
 */

const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db calls, cryptograpthyn network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
        
    }, 1000)
})

// promise is consumed.
promiseOne.then(function(){
    console.log("promise consumed");
})

//  type - 2

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 is resolve");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})

    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else{
            reject('Error: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then( (username) => {
    console.log(username);
    

}).catch(function(err){
    console.log(err);
    
}).finally( () => {console.log("promise is either is rejected or solve");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'manisha', password: "1234"})
        }else{
            reject('error: js is went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    
        
    } catch (error) {
        console.log(error);
        
        
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        // we have to wait this because it will take time.
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
        
        
    }
}
// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    
}).catch((error) => console.log(error ))