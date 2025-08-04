
// 1.Promise
let myPromise = new Promise((resolve , reject) => {
  let data =  false

  if(data){
    resolve("Data get")
  }else{
    reject("Data not get")
  }
})


myPromise
.then((message) => console.log(message))
.catch((error) => console.log(error))

// 2.Promise.all()
//If any promise is rejected, it immediately rejects.

let myPromise1 = new Promise((resolve , reject) => {
  let data =  true

  if(data){
    resolve("Data get")
  }else{
    reject("Data not get")
  }
})

let myPromise2 = new Promise((resolve , reject) => {
  let data =  false

  if(data){
    resolve("Data get")
  }else{
    reject("Data not get")
  }
})

Promise.all([myPromise1,myPromise2]).
then((message) => console.log(message))
.catch((error) => console.log(error))

// 3.Promise.allSettled()
//Waits for all promises to settle  
Promise.allSettled([myPromise1,myPromise2]).
then((message) => console.log(message))
.catch((error) => console.log(error))

// 4.Promise.race()
// resolves or rejects as soon as the first promise settles.

Promise.race([myPromise1,myPromise2]).
then((message) => console.log(message))
.catch((error) => console.log(error))

// 5.Promise.any()
// resolves with the first fulfilled promise.

Promise.any([myPromise1,myPromise2]).
then((message) => console.log(message))
.catch((error) => console.log(error))