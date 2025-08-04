// 1.includes()

let str = "My name is Vivek , I am a node js devloper";

console.log(str.includes("Vivek"))

// 2.startsWith()

console.log(str.startsWith("My"))
console.log(str.startsWith("Vivek" , 11))

// 3. endsWith()
console.log(str.endsWith("devloper"))
console.log(str.endsWith("name" , 7))


//4.spilt()

console.log(str.split(" "))
console.log(str.split(","))

//5.replace() , replaceAll()

console.log(str.replace("Vivek" , "Lakhani"))
console.log(str.replaceAll("m" , "A"))

//6.toLowerCase() , toUpperCase()

console.log(str.toLowerCase());
console.log(str.toUpperCase())


//7.Multi-Line Str

let MultiStr = `My name is vivek,
                My age is 25,
                My nick name VP`