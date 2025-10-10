// Arrays 

// array is basically a single variable in which we can store multiple items.

const myArray = [0, 1, 2, 3, 4, 5]

// array is stored in square brackets and values which are stored inside arrays are called as elements

// we can store numbers value or strings or boolean value inside array 

// Some imp points about arrays

//1. in javascript arrays are re sizeable , it means that once a array is declared so we can resize it 

//2.we can store any type of datatype in array eg: objects , numbers, integers , string , arrays .

//3. in javascript arrays are zero indexed, it means if you want to access any element in arrays

// so you have to access it by its index position . index position in array starts from 0.

const arr1 = [52,63,89,5514,"hello",["hi"]]

console.log(arr1);

console.log(arr1[5]);

// arrays in javascript create shallow copies. which means copy of object will also share same reference 
// points (basically heap memory , we get refernce points of orignal)
// there is also deep copies , which is vice-versa of shallow copies and which is eg of stack memory

// we can declare array by three types 

const arr2 = [0,1,2,3,4,5]

const myHeros = ["naruto","goku","sakuna","obito"]

const anArray = new Array(0,1,2,3,4,5)

console.log(arr2);

console.log(myHeros);

console.log(anArray);

// Arrays methods

//1. push method : it add values inside an array

const arr = [0,1,2,3,4,5]

// arr.push(6)


//2. pop method:  arr.pop() it removes the last element in array

// arr.pop()

//3. unshift method : it add an element in the array at 0 index position. it add elements from starting of array

// arr.unshift(7)

//4. shift method : it is same as pop method but it removes the element at 0 index pos.

// arr.shift()

console.log(arr);

// some method in arrays are question type method, in which ask for something in array

// include method : it tells that if that element is stored in array or not

console.log(arr.includes(2));

// indexof method : it tells us the index position of that method
console.log(arr.indexOf(2));

// join method : is bascially adds all the value and convert the array into string

const arr5 = [0,1,2,3,4,5,6,7,8,9]

const newarr5 =  arr5.join()

console.log(arr5);

console.log(newarr5);
console.log(typeof newarr5);


//  SLICE   &   SPLICE

// slice method is used when we want to print a section of elements in array by giving a range

// eg:  arrA.slice(1,5)  last range element is not icluded 

// output:  [ 12, 13, 14, 15 ]

// splice method is used when we want to print a section of elements in array by giving a range

// eg:  arrA.slice(1,5)  last range element is also included  

// eg: output: [ 12, 13, 14, 15, 16 ]

// but what is the main diffrence between slice and splice 

// jab ham slice ko use karte hai toh orignal array pe koi frk ni pdta . hum bus orignal array se ek range 
// ke section ko print kr dete hai par splice mei orignal array pr bhi frk pdta hai  . humne jo bhi range ka 
// section splice kiya hai wo orignal array se remove ho jata hai 

const arrA = [11,12,13,14,15,16,17,18,19,20]

console.log("A ",arrA);

const arrB = arrA.slice(1,5)

console.log("B ",arrB);

const arrD = [11,12,13,14,15,16,17,18,19,20]

const arrC = arrD.splice(1,5)

console.log(arrD);

console.log("c ",arrC);





