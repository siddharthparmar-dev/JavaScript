// Javascript is synchronous language 

// it is single threaded 

// execution 


// execute one line of code at a time 

// console.log(first);
// console.log(second);

// if there is some error in first then it will stop at that line and will not execute further 

// Blocking code vs Non Blocking code 

// Blocking code : it basically stops the execution or we can say that it stops the flow of program

// it reads file sync

// Non blocking code : it does not blocks the execution and it reads file async 

// which one  is better totally depends on your usecase 


// 1. Normal Function vs Async Function

// 👉 Normal function synchronous होते हैं — मतलब एक-एक करके लाइन execute होती है। जब तक एक काम पूरा नहीं होता, अगला start नहीं होगा।

// 👉 async function asynchronous काम करने देते हैं — यानी कुछ काम background में चलता रहता है और बाकी code अपना काम करता रहता है।

// 2. async function क्या करता है?

// अगर तुम किसी function को async keyword से define करते हो, तो:

// वो हमेशा एक Promise return करता है।

// तुम उसके अंदर await का use कर सकते हो।