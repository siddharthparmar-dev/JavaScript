
// marvel_heros.push(dc_Heros)

// console.log(marvel_heros);

// output: [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

// so we can see that dc_heros is pushed inside marvel_heros but we can clearly see that dc_heros is pushed 
// as a whole array and its element not got merged individually.

// dc_heros will be counted as single element at index pos 3 in marvel_heros

// how we will access the values of dc_heros pushed inside marvel_heros 

// we can access it by this method console.log(marvel_heros[3][1]) 

// first we will select parent element by index position. so here dc_heros index position is 3 
// and then we will select child element .

// console.log(marvel_heros[3][2]);

// but this way of writing code is untidy and not considered good 

const marvel_heros = ["thor","Ironman","Spiderman"]

const dc_Heros = ["superman","flash","batman"]

const indianHeros = ["shaktiman","Naagraj","Krish"]

// marvel_heros.push(dc_Heros)

// console.log(marvel_heros);

// this way of merging two array is not good because thw whole array is merged as an element.

// but if we want to merge elements of these arrays then we have two options.

// first one is concat() and second is better than concat() which is spread operator "...".

// lets check with examples 

const concatarray = marvel_heros.concat(dc_Heros)
console.log(concatarray);

// output: [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

// second method is spread operator : "..."

const spreadarray = [...marvel_heros,...dc_Heros,...indianHeros]

console.log(spreadarray);

//spread operator is mostly used as it looks clean while writing and get easily understood by others 


// we can do it by push method also we just have to use spread operator inside push.

// marvel_heros.push(...indianHeros)
// console.log(marvel_heros);

// marvel_heros.push(...dc_Heros)
// console.log(marvel_heros);

marvel_heros.push(...dc_Heros,...indianHeros)
console.log(marvel_heros);

// if there is array inside an array and sub array inside that array also and we want to merge all elements
// then we will flat method but in flat we have to give depth also that till how much depth we want to merge array

const anArray = [0,1,2,3,[4,5,6,[7,8,9]],85,[89,[59]]]

const onArray = [20,25,3,61,58,[5,1,4,5,5,[5,55,1,5,7]],8,85,8,7,5,4,5,4,]

const flatArray = anArray.flat(2)

const concatarray2 = anArray.flat(2).concat(onArray.flat(2))

console.log(concatarray2);


// console.log(flatArray);

// // here we can see we have sub array inside an arrays and array inside those sub array also

// const spreadarray2 = [...anArray,...onArray]
// console.log(spreadarray2);

// // spread array doesn't work for sub arrays

// const spreadarray3 = anArray.concat(onArray,indianHeros)
// console.log(spreadarray3);

//some methods of array 

// Array.isarray used to check wether it is an array or not.

const arr = ["siddharth"]

console.log(Array.isArray(arr));

// array.from() convert given string number or array into array. but it can convert one variable not set of variables

const name = "fyxs"

console.log(Array.from(name));


const socre1 = [500,30225,5124]
let socre2 =400
let socre3 =300

console.log(Array.of(socre1,socre2,socre3));

console.log(Array.from(socre1));

//concat() and flat() 

const pr1 = [61164,8455,548555,854545,564965,4566]
const pr2 = [61164,8455,548555,854545,564965,4564,[45522,54566,789261,455],4566,78945]

console.log(pr1.concat(pr2.flat(1)));


const obj = {name:"id_hashmap", id:"54111"}

console.log(Object.values(obj));

let anDate = new Date("2025-08-12")
console.log(anDate.toLocaleDateString());

console.log(anDate.getDay());

console.log(Date.now());

const obj1 = [auth1 = "bycyrpt",
    authentication1 = "nextAuth.js"
]
 
console.log(obj1);

console.log(Object.keys(obj1));

const array1 = [3,3,4,5,6,7,7,[3,4,5,6,7,8,2,1,6,[6,79,5,7,8],5,6,7],4,6,7]
const array2 = [3,3,4,5,6,7,7,[3,4,5,6,7,8,2,1,6,[6,79,5,7,8],5,6,7],4,6,7]

console.log([...array1.flat(3),...array2.flat(3)]);











