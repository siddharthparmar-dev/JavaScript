// for of loop

const arr = ["bmw","jaguar","land rover","rolls royce","mercedes","Audi","chevrolet","maserati","lamborghini"]
for (const cars of arr) {
    // 
    
    
}
 //This car brand is bmw
// This car brand is jaguar
// This car brand is land rover
// This car brand is rolls royce
// This car brand is mercedes
// This car brand is Audi
// This car brand is chevrolet
// This car brand is maserati
// This car brand is lamborghini

// basically in for oif loop it will print all the elements individually 

// we can arrays string or objects inside for of loop

const name = "when will gta vi come?"

for (const GTA of name) {
    if (GTA == " ") {
        continue
    }
    console.log(`Print each char of ${GTA}`);
    
}

// MAP 
// map is basically as set of key value pair and it has unique data , no duplicate pair of key and values
// also map always gives result in order

const data = new Map()
data.set("name","sid")
data.set("ID","4646")
data.set("city","Delhi")

console.log(data);

//Map(3) { 'name' => 'sid', 'ID' => '4646', 'city' => 'Delhi' }

// for of loop in this map

for (const [key, value] of data) {
    console.log(key, value);
    
}

// [ 'name', 'sid' ]
// [ 'ID', '4646' ]
// [ 'city', 'Delhi' ]

// it is printing in array but we want individual values

// so we declare and array and created two variables in it key and value and printed data in those variables

const obj =  {
    game1 : "bgmi",
    game2 : "cod",
    game3 : "fortnite",
    game4 : "balorant"
}

// applying for of loop in this object

for (const games of obj) {
    console.log(games);
    
}

// error : object is not itretable

// so for object we use for in loop
