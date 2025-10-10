// Switch statement 


// if we want to check multiple conditons we use if and else if statement but we can use switch statement also
// In switch we have a key and case value so if our case value matches then it will execute that command 
// break is used to stop execution , if we dont use break then it will print all the commands below the match case

const month = 4


switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    default:
        console.log("error");
        
        break;
}
// so here we have created month as key and given diffrent case value so when our case value matches the key value 
// it execute and log the output and break stop execution and it not execute further

// we can use number and strings also as case value or key value

switch (key) {
    case value:
        
        break;

    default:
        break;
}