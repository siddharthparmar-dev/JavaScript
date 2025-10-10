// Promise : ye basically ek object hai jo represent krta hai 
// ek asynchronous operation ke eventual completion ya failure ko 

// how to create a promise 
// we declare promise as an object and we have create a call back function inside it 
// inside that call back function we have two parameters , resolve and reject


const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task is completed");
        resolve()
    },1000)
})

// .then and .catch are connected to resolve and reject

promiseOne.then(function(){
    console.log("promise consumed");
    
})

// resolve() ye basically promise ko then se connect krega promise execute hone ke baad then execute hoga 
// promise ko .then se connect krne ke liye hum use krte hai resolve ka aur hum resolve ke andar bhi kuch pass kr skte hai 

// we can use promise function directly also its not necessary to store it to a variable   

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hello pls print this");
        resolve()
        
    },1000)
}).then(function(){
    console.log("async task 2 completed");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username: "siddharth",email:"sid@example.com"})
    },1000)
})

promiseThree.then(function(print){
    console.log(print);
    
})

const promisefour = new Promise(function(resolve,reject){
  setTimeout(function(){
     let err = false
    if (!err) {
        resolve({username: "siddharth", password: "6464646"})
    }else{
        reject('ERROR something went wrong')
    }
  },1000)
})
// as we know resolve is connected to then and reject is connected to catch

// here if the condition will meet it will execute resolve and if ccondition not meets 
// then it will execute reject

promisefour.then(function(print){
    console.log(print);
    return print.username                      
    
}).then(function(print){               // this is called chaining 
    console.log(print);
    
})
.catch(function(print){
    console.log(print);
    
}).finally(() => {console.log("completed");  // finally will execute wether it is resolved or not
})


const promisefive = new Promise(function(resolve,reject){
  setTimeout(function(){
     let err = true
    if (!err) {
        resolve({username: "sid", password: "48484"})
    }else{
        reject('ERROR here')
    }
  },1000)
})

async function promiseFive() {
    try {
        const response = await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

promiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data = await response.json()
//     console.log(data);
    
//     } catch (error) {
//         console.log("err",error);
        
//     }

// }

// getAllUsers()

async function printit() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(res);
    } catch (error) {
        console.log("this is error");
        
    }   
}

printit()

num = 10
console.log(num);
var num = 15


// ******************************** JS Engine **************************************

// inside js engine 

// we have Memory heap and call stack 

// inside  call stack we have global execution context and other functional context

// call stack follows LIFO last in first out

// 

 //                        |------------------------------|
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |                              |
 //                        |         function             |
 //                        |         function             |
 //                        |         function             |
 //                        |         function             |
 //                        |         function             |
 //                        |                              |
 //                        |       Global Function        |
 //                        |------------------------------|


 // there is one more thing inside js engine which is called as task queue

 // task queue is where all the call back functions are stored 

 // |----------------------------------|
 // |  |--------|     |--------|       |
 // |  | cl back|     | cl back|
 // |  |--------|     |--------|       |
 // |----------------------------------|

 // when the caall back fumction is completed it is added to Call stack.

 // setTimeout() and setInterval() both are example of task queue

 // for fetch() to fetch the API , there is a special queue which is caled micro task queue .
 
 // this micro task queue is a special queue or we can say it is a vip queue 
 // because all the other task are stopped and this queue is given priority first.

 // fetch()

 // we create const response = fetch()

 // so this fetch() do two task firstly it create memory to store it which we call data 

 //  onFulfilled[]
 //  onRejection[]

 // secondly it send a network request to the web browser.

 // if the request is fullfilled then onFullfilled[] memory is created 
 // if the request is rejected then onRejected[] memory is created 
 //