// 1.spred
let a = [1,2,3,4]
let b = [0,...a];
let c = [7,8,9]
let d = [...a,...c]

console.log(b);
console.log(d)

let obj1 = {name : "vivel"};
let obj2 = {age : 25 };
let newObj = {...obj1,...obj2}

console.log(newObj)


// 2.rest 

let [one , ...rest] = [1,2,3,4,5,6,7];

console.log(one);
console.log(rest)

function sum(...array){
    return array.reduce((acc,a) => acc + a , 0)
}

console.log(sum(1,2,3))