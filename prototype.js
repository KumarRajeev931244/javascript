let myName = 'hitesh           '
console.log(myName.truelength);

let myHero = ['spiderman', 'monkey']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.rajeev = function(){
    console.log(`rajeev is present in all object `);
    
}

Array.prototype.heyRajeev = function(){
    console.log(`rajeev is present`);
    
}

// heroPower.rajeev()
// myHero.rajeev()
// myHero.heyRajeev()
// heroPower.heyRajeev() //fail

// jab hum object mae inject kar dete hai prototype eska matlab voh function sab mae available hoga.

// inheritance

const user = {
    name: "chai",
    email: "chaigoogle.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fulltime: true,
    __proto__: TeachingSupport  //inheritance
}

Teacher.__proto__ = user // old syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = 'chaiAurCode        '
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
    
    
    
}
anotherUserName.truelength()

"manisha".truelength()