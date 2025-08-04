// 1.includes()

let str = "My name is Vivek , I am a node js devloper";

console.log(str.includes("Vivek"))

// 2.startsWith()

console.log(str.startsWith("My"))
console.log(str.startsWith("Vivek" , 11))


//3.spilt()

console.log(str.split(" "))
console.log(str.split(","))

//4.replace() , replaceAll()

console.log(str.replace("Vivek" , "Lakhani"))
console.log(str.replaceAll("m" , "A"))

// 5.toLowerCase() , toUpperCase()

console.log(str.toLowerCase());
console.log(str.toUpperCase())