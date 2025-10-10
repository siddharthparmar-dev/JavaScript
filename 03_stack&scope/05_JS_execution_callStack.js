// JAVASCRIPT EXECCUTION CONTEXT

// hamari javacipt ki code file se sabse pehle ek chiz banti hai global execution context

// iss global execution context ko refer kiya jata hai ek variable ke through jise ham "this" kehte hai 

// global execution context harf envoirnment mei alag hota hai  

// browser mei window objecf hota hai usi trah node deno bun sbme alag hota hai 

// fir second hota hai function execution context 

// mainly ye dono hi hote hai but ek aur hota hai jisko hum Eval execution context bolte hai 

// javascript code runs in two phases
// 1. memory creation phase 
// 2. execution phase

// memory creation phase mei bas memory allocation hota hai 


// SAMPLE CODE TO UNDERSTAND 

let val1 = 10
let val2 = 20

function addnum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(25,62)

// ****************************************************  STEPS ***************************************

// lets understand step by step how our javascript code runs 

// javascript is  a single thread process

// step 1 : Global execution phase 

// hamari js file sabse pehle global execution phase m jati hai jaha  global context create hota hai aur 
// allocate hota hai "this"  keyword mei 

// step 2 : memory creation 

// fir file memory creation phase mei jati hai aur sare variable ko memory m store kara jata hai 

// val1 = undefined
// val2 = undefined 

// yes memory creation phase mei sare variables store kiye jagte hai aur unke anadar store kiya jata
// hai undefined .

//addnum = (num1,num2)  //iske andar function ki definiton jayegi

// result1 = undefined

// result2 = undefined

// so this is our first cycle which is called memory allocation

// step 3 : execuition phase 

// iss phase mei values jayengi 

// val1 = 10

// val2 = 20

// addNum  // this is a function

// jitni baar bhi function execute hote hai iske liye ek naya sand box create hota hai 

// jisko hum kehte hai " new executional context "

// iss " new executional context " mei new variable envoirnment create hoga aur execution thread bhi 

// fir hamara step 2 and 3 dobara hoga iss function ke liye 

// hum jitni bhi baar function banyenge utni baar memory allocation aur execution hoga 

// num1 = undefined 
// num2 = undefined 
// total = undefined 

// execution phase

// num1 = 10
// num2 = 20
// total = 30  // isme calculation bhi hogi

// ye total value chale jayegi global execution context mei 

// aur iss function ka new exectutional context box hai wo delete ho jayega 

// fir dobara function execute hora hai let result2 = addnum(25,62)

// iske liye bhi same process dobara hoga

// new executional context create hoga -> memory allocation -> execution phase 

// fir ye total value global execution context mei chala jayega 

// ye same process baar baar repeat hoga 

// ***************************** CONCLUSION *********************************

// inn sab se yeh conclusion milta hai 

// ki jab bhi hum kisi javascript file ko run karte hai toh woh 3 phase  m hoti hai 

//1. global execution phase   // global context create hota hai aur this keyowrd m allocate hota hai
//  global execution context har envoirnment mei alag h browser m alag h node m alag h aur deno m alag


//2. memory allocation phase // isme sare variable store kiye jate hai , memory allocate hoti hai 
// but wo execute nahi hote hai , wo sare variables undefined rehte hai 

//3. execution phase  // iss phase m unn variables ke andar value store kari jati hai 

// functions ke liye ek alag sandbox create hota hai jisko hum new executional context bolte hai 

// usme fir memory creation aur execution hota hai function ke variables ka 
// fir wo execute hoke final value global execution context m store hojati h 
// aur ye sandbox delete ho jata hai 


// call stack follows LIFO (last in first out)   

// function one(){
//     console.log("one");
    
// }
// function two(){
//     console.log("two");
    
// }
// function three(){
//     console.log("three");
    

// so first functione one will go and memory creation and execution will be done and then it will come out and 
// then second will go and come out and then third also 
// but if call function two in function one  and function three in function two 
// then first function will go and then function two will go and then function three will go inside call stack
// but first function three will come out and then function two and then function one
 
function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
}    

one()

//output
// one
// two
// three



//                     CALL STACK                   
//               \----------------------\
//               \                      \    CALL STACK FOLLOWS LIFO ( Last in First out )
//               \                      \
//               \                      \
//               \                      \
//               \                      \
//               \                      \
//               \                      \
//               \                      \
//               \       three          \   // three will come out first
//               \       two            \   // after three two will come out
//               \       one            \   // then at last one will come out
//               \----------------------\

