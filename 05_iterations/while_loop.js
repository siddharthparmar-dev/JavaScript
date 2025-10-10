// while loop

let num = 0
while (num <= 10) {
    console.log(num);
    num = num +5
    
}

let myarray = ["cricket","football","hockey","table tennis","rugby","badminton","tennis","basketball"]

let arr = 0

while (arr < myarray.length) {
    console.log(`value is ${myarray[arr]}`);
    arr = arr + 1
}

// do while loop

// let id = 0
// do {
    //     console.log(`id is ${id}`);
    //     id++
    // } while (id < 10);
    
 // what if we increase value of if from 0 to 11 
    
    let id = 11
    do {
        console.log(`id is ${id}`);
        id++
    } while (id < 10);
    // id is 11

    // it will print one time and then stop because in dowhile we write the condition at last 4
    // dowhile is used in exceptional cases

    
