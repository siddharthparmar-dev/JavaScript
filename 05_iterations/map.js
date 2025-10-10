// DIFFRENCE BETWEEN foreach , filter ,map

// forEach 
// sirf har element pe loop chalata hai
// kuch return nhi krta hai undefined rhta hai 
// print krne ke liye hume use console log krna padega



// filter 
// filter har element par condition chalata hai 
// new array return krta hai sirf unn values ki jo condition pass kr lete hai


// map
// har element par function chalata hai
// new array return krega jisme transformed values hoti hai 

//   method         return value                      use case

//  forEach         undefined                   sirf loop lagane ke liye
//  filter         new array(subset)            condition ke basis pe element select krna
//   map           new array(modified)          transformation (values ko change krna)

const numbers = [1,4,6,8,0,3]

const ForEachNums = numbers.forEach( (nums) => {console.log(nums);})

// output: 
// 1
// 4
// 6
// 8
// 0
// 3

const filterNums  = numbers.filter( (val) => val > 5 )
// console.log(filterNums);

// output: [ 6, 8 ]


const MapNums = numbers.map( (data) => data * 5 )
// console.log(MapNums);

// output: [ 5, 20, 30, 40, 0, 15 ]

// chaining

// chaining mei hum ek se jyada methods lagate hai ek sath 

const chainmethods = numbers
            .map( (nums) => nums * 10)
            .map( (nums) => nums + 5)
            .filter( (nums) => nums > 15)
console.log(chainmethods);

// output : [ 45, 65, 85, 35 ]

// chaining mei hum ek sath multiple methods laga skte hai par 1st wale se jo result ayega second method uspe 
// apply hoga fir 3rd wala second wale ke result and continue aisi hi chlta rhega 

