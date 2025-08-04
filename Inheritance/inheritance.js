

class Person {
    constructor(name , age){
        this.name = name ;
        this.age = age ;
    }

    g(){
        console.log(`Hello , My name is ${this.name} and I am ${this.age} years old`)
    }

};

class NickName extends Person{
    constructor(name , age , nickName){
        super(name , age);
        this.nickName =  nickName
    };

    n(){
        console.log(`My nick name is ${this.nickName}`)
    }
}
let person1 = new NickName("vivel" , 25, "VP");
let person2 = new NickName("Chirag",30, "chigo")
// person1.g();
// person1.n();
// person2.g();
// person2.n();


let obj = {
    name : "vivek",
    age : 25,
    log() {
        return `my name is ${this.name}`
    }
};

let obj1 = Object.create(obj);
obj1.name = "VP"
// console.log(obj1.name);
// console.log(obj1.log())