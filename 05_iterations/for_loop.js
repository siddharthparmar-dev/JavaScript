// for loop

for (let index = 0; index < 15; index++) {
    const element = index;
    console.log(element);  
}

// so in for loop we declare a variable and assign a starting value to it
// then we give a condition next to  it, (when that condition will meet loop will stop) 
// and then give an iteration or loop command to it 
// then console log that variable inside the scope

for (let id = 0; id < 99; id++) {
    const element = id;
    console.log(element);
    
    
}


// we can write if statement also inside for loop

for (let Number = 0; Number < 10; Number++) {

    if (Number == 5) {
        console.log( `it is ${Number}`);
        
    }else{
        console.log(`no is ${Number}`);
        
    }
   
    
}

for (let x = 7; x < 8 ; x++ ) {
    console.log(`Multiplication table of ${x}`);
    for (let j = 1; j < 11; j++) {
        console.log(`${x} * ${j} = ${x*j}`);
        
        
    }
    
}

// array in for loop

const arr = ["bgmi","cod","moba","fortnite","rocket league","valorant"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

// break in for loop : to stop loop at a a particular point

// for (let index = 0; index < 15; index++) {
//     if (index == 10) {
//         console.log("10 is Detected");
//         break;
//     }
//     console.log(`value is ${index}`);
    
    
// }

// continue in for loop : to stop at a particular point for one time and then continue
for (let index = 0; index < 15; index++) {
    if (index == 10) {
        console.log("10 is Detected");
        continue
    }
    console.log(`value is ${index}`);
    
    
}

// agar hum break ya continue ke bina print krenge toh woh 10 aane pe console log krega
//  but uss value ko dobara print krega
// 10 is Detected
// value is 10

// if you want that no increases by 5 then use variable += 5 
for (let uid = 0; uid < 99; uid += 5) {
    const element = uid;
    console.log(element);
    
    
}