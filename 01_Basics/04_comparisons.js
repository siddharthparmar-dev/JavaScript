// console.log( 2 > 4 );
// console.log( 4 >= 4 );
// console.log( 9 > 4 );
// console.log( 1 < 4 );
// console.log( 6 <= 6 );
// console.log( 6 == 6 );
// console.log( 6 != 6 );


// console.log( 2 > 1);
// console.log( 02 > 1);

//in javascript if we compare two things then we cannot predict the result or we can say the result is not predictable as it 
// automaticalty converts the things and then gives us a result but in typescript it donot allows us to compare two diffrent kind of data types 
// so we should always rry to do comparison  of same  data types 

console.log( null > 0);
console.log( null == 0);
console.log( null != 0);
// equality check


// console.log( null >= 0);
// in this case we have compared values and js has treated null as 0 that's why is gives us true 


// The reason is that equality check and comparison check both works diffrently 

// comparison converts null to a number treating it as zero.


// console.log( null == 4);
// console.log( null <= 4);

console.log( undefined == 0 );
console.log( undefined > 0 );
console.log( undefined < 0 );
console.log( undefined <= 0 );
console.log( undefined != 0 );

// == means equality but === means strict check it not only check numbers but it also check data types

console.log( "5" === "5" );

