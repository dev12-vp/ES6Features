// 1.map()
// update the elemnt using map method 

let number = [4,20,12,34,90];
let updateNUmber  = number.map(n => n*2);

console.log(updateNUmber);

// 2.reduce()
//sum of all number using reduce

let total1 = number.reduce((acc,x) => acc + x , 0) ;

function sum(acc , x){
 return acc + x
}

let total2 = number.reduce(sum,5);

console.log(total1)
console.log(total2)

// 3.filter()
//filter array value

let filterNumber = number.filter(n => n >= 20);
console.log(filterNumber)

// 4.concate(),reverse()

let number2 = [101,102,103];

console.log(number.concat(number2).reverse())

// 5.pop() , push() , shift() , unsift()

number.push(111);
console.log(number)
number.pop()
console.log(number)

number.shift()
console.log(number)
number.unshift(222)
console.log(number)

//7.include

if(number.includes(222)){
    console.log("Yes, This value include in array")
}else{
   console.log("No , This number not include in array")
}

//8.find()

let findFirstValue = number.find((a) =>  a < 20);

console.log(findFirstValue)

// 9.indexOf()

console.log(number.indexOf(34));

//10, some() and every();
console.log(number.some((a) => a % 2 === 0))

let checkSome = number.concat(1)
console.log(checkSome.every((a) => a % 2 === 0))

