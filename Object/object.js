// 1.Object Destructuring

let person = {
    name : "vivek",
    age : 25,
    city : "Ahemdabad"
};

let {name , age , nickName = "VP"} = person;
console.log(name);
console.log(age);
console.log(nickName);


let data = {
    id : 1 ,
    person : {
        userName1 : "Vivek",
        email : "vivek@test.com"
    }
};

let {person : { userName1 , email}} = data ;

console.log(userName1);
console.log(email);


// 2.shorthend property

const userName = "vivek";
const userCity = "Ahemdabad";
const userAge = 25 ;

const user = {
    userName,
    userCity,
    userAge
};

console.log(user.userName)
console.log(user.userCity)
console.log(user.userAge)

// 3.Object.create()

let newPerson = {
    name : "vivek",
    age : 25
};

let p1 = Object.create(newPerson);
p1.name = "VP";
p1.age = 26

console.log(p1)

// 4.Object.entries()

console.log(Object.entries(person));
console.log(Object.entries(person)[0]);

Object.entries(person).forEach(([key,value]) => {
    console.log(`${key} : ${value}`)
})


//5.Object Key and value

console.log(Object.keys(person))
console.log(Object.values(person))

// 6.Enhanced Object Literals

function MyPhone(name , model , years){
return {
    name ,
    model ,
    years ,
}
}

console.log(MyPhone("Nothing" , "Nothing 1" , 2021))