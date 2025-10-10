// javascript mei mainly 2 types ki memories hai 

// Stack and Heap 

// Stack use kara jata hai Primitive data types ke liye jaise ki string,number,boolean,bigInt,null,undefined,symbol

//heap use kara jata hai non primitive data types ko store karne k liye jaise ki arrays , objects , functions.

// jo bhi variable  stack ke andar store hoti hai hame uski ek copy milti hai 

//but heap m agar koi variable store hai toh hame uska reference milta hai 



//*************************************** Example of stack ******************************************

let myname = "siddharth"

let yourname = myname

yourname = "sid"


console.log(yourname);
console.log(myname);

// hamne let yourname ko let myname ka reference diya aur baad mei yourname ki value change kar di isse hamare let myname par koi frk ni pdega
// becuase koi bhi variable jo ki stack memory mei stored hai aur ham uska reference lete hai toh hame main varaible ki copy di jati hai 
// isliye ham koi change karenge toh uska asar sirf copied variable pe padega main variable waise ka waisa hi rhega




//*************************************** Example of Heap ******************************************

let manA = {
    name: "ram",
    Age: "25",
    email: "siddharth@gmail.com"
}

let manb = manA

manb.email = "ccDvD@gmail.com"

console.log(manA.email);
console.log(manb.email);

// hamne ye seekha ki agar hamne manA variable ko ek object assign kia hai aur usme kuch value dali hai jaise name email age 
// hamne ek aur variable declare kiya aur usko manA ki values assign kr di hai 
// then hamne manB.email mtlb manB mei jo email hai usko change kar diya hai toh hamari manA ki bhi email value change ho jayegi 
// because object ek non primitive data  type hai jo ki heap memory mei store hota hai aur isme hame copy nhi milti hai balki 
// orignal ka reference milta hai.

let characters = {
    character1: "naruto",
    character2: "goku",
    character3: "jujutsu kaisen",
    character4: "dragon"
}

let nameofcharacters = characters

nameofcharacters.character3 = "saitama"

console.log(characters);



let favouriteFood = "burger"

favouritedish = favouriteFood

favouritedish = "momos"

console.log(favouriteFood);
console.log(favouritedish);


const newarray = ["abc", "1235", "hello"];

let anotherarray = newarray

anotherarray = ["efg", "gst","lgd"];


console.log(newarray);

let number1 = {
    name: "tiger",
    food: "meat"
}

let number2 = number1

number2.food = "greenleaves"

console.log(number1);

// in array we have to give positin index and then we can change the value 

let array1 = ["abcd", "efgh", "xyz"];

let array2 = array1;

array2[1] = "lol"
array2[0] = "sos"


console.log(array1);

let array3 = ["cat", "dog", "tiger","elephant"]

let array4 = array3;

array3[3] = "lion"

console.log(array4);