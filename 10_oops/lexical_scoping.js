// function outerFunction(){
//     let userName = "sid"
//     function innerFunction(){
//         console.log(userName);
        
//     }
//     innerFunction()
// }

// outerFunction()

// lexical scoping 

// basically hum outer function ke andar declared variable ka access innerfunction ke  pass hai 
//but inner function ke andar ke variable ka access na toh outer function ke pass hoga aur nahi other inner func k pas

// function outerFunction(){
//     let userName = "sid"
//     function innerFunction(){
//         let lastName = "op"
//         console.log(userName);  
//     }
//     function SecondInnerfunction(){
//         console.log(lastName);    //ReferenceError: lastName is not defined
        
//     }
//     innerFunction()
//     SecondInnerfunction()
// }

// outerFunction()


// outer function ke pass inner wale function ka access nahi hota 

// function outerFunction(){
//     console.log(GodX);     //ReferenceError: GodX is not defined
    
//     function innerFunction(){
//         let lastName = "op"
//         console.log(userName);  
//     }
//     function SecondInnerfunction(){
//       let middleName = GodX
        
//     }
//     innerFunction()
//     SecondInnerfunction()
// }

// outerFunction()


// bas isi ko kehte hai  lexical scoping 

// beta baap se share kr skta hai 
// baap bete se share nhi kr skta 
// bhai bhai apas mei share  hi kr skte

function outerFunction(){
    let userName = "sid"
    function innerFunction(){
        let middleName = "op"
        console.log(userName);
        function InsideInnerFunction(){
            console.log(userName);
            
        }
        InsideInnerFunction()
    }
    innerFunction()
}

outerFunction()

// pota bhi dada ke sath share krega aur par pota bhi.....