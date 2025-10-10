console.log(Math.PI);   //3.141592653589793

Math.PI = 5.56

console.log(Math.PI);   // 3.141592653589793

// value change nhi hui kyuki ye hardcoded values h , 

// lets understand

//getOwnPropertyDescriptor()  // ye hume kisi object ki key value ke property ka description deta hai 

// for eg : const newobj = { 
//     name: Highlight,
//     id:5451
// }

// newObj hamara object hai aur name ya id uski property hai 

// same aise hi math ek object hai aur PI uski ek key value  hai 

// jisko ki hardcode kr rkha hai wo change nhi hogi 

//object.getOwnPropertyDescriptor(object ka naam , "object ki property ka naam")

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

//{
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// ye uss property ka description hai , jisko js developers ne false kr rkha hai 


// humne apne banaye hue objects ke sath mei bhi aisa kr skte hai 

const newObj = {
    username: "sebi",
    id: 546
}

console.log(newObj);

newObj.username = "changed"
console.log(newObj);          //{ username: 'changed', id: 546 }

console.log(Object.getOwnPropertyDescriptor(newObj, "username"));

// {
//   value: 'changed',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// now we can hardccode our values using defineProperty()

// humare pass total 3 property hai writable , enumberable , configurable 

// writable : dobara reassign nhi hogi 
// enumberable : console.log() print ni krega

Object.defineProperty(newObj,"username",{
    writable: false,
    enumerable: true,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(newObj,"username"));

newObj.username = "againChanged"

console.log(newObj);

Math.PI = 5.14


console.log(Math.PI);




const arr = [1,2,9,4,5,4,5,7,9,3,5]

// const arr2 = arr.slice(0,4)
// console.log(arr2);

const arr3 = arr.
console.log(arr3);
console.log(arr);




