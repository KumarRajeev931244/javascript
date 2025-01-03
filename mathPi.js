// getOwnPropertyDescriptor = tell us about hidden property of object.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

const chai = {
    name: "ginger chai",
    price: "250",
    isAvailable: true
}
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false

})


