// 1.let variables

let name = "vivek";
console.log(name);
name = "vp"
console.log(name)


// 2.const

const userName = "vivek"
console.log(userName);
// userName = "VP"
// console.log(userName) // value not updated 

const userObje = {
 name : "vivek",
 age : 25
};

userObje.name = "VP"

console.log(userObje) // value updated

//both varibles cannot be accessed without initialization otherwise it will give 'referenceError'.
//both variables are hoisted but stay in the temporal dead zone untill the initialization.
//both variables is block scope