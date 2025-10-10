const newPromise = new Promise(function(resolve,reject){
   setTimeout(function(){
     let start = false
    if (start == true) {
        resolve("hii")
   }else{
    reject("error displayed")
   }
},1000)
})


newPromise.then(function(printit){
    console.log(printit);
    
}).catch(function(printit){
    console.log(printit);
    
})