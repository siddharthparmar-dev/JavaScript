// pehle agar kisi function ke properties ya uske variables ko hume 
// dusre function mei use krna hota tha toh hum call ka use krte the 


// function PrintUser(username,userid){
//     this.username = username
//     this.userid = userid
// }


// // ab gar hum ek naya function banate hai aur hum printUser ke variable ko use krna chahte hai toh hum call use krna
// // pdta tha 

// function adduser(username,userid,email){
//     // ab yaha pr hume username aur userid PrintUser function se lena hai 
//     PrintUser.call(this,username,userid)
//     this.email = email
// }

// const UserA = new adduser("sid",6464,"xyz@gmail.com")

// console.log(UserA);

 function PrintUser(username,userid){
     this.names = username
     this.id = userid
     console.log( `Your username is ${this.names} and id is ${this.id}`);
     
 }


function newfnc(names,id,email){
    PrintUser.call(this,names,id)  // this, arg hum usko bta rhe h ki ye sab hume iss object m store krna hai  
    const emailID = email
    return `Details are ${names} ${id} ${email}`;
    
}


const ty = newfnc("sid","dsdfsrgrg546","abc@google.com")
console.log(ty);


// but ye bhot old method hai 

// naya method hai class ka 


// class user {                                      // class basically group h data aur methods ya functions ka
//     constructor(username) {
//         this.username = username
//     }

//     logit(){
//         return `username is ${this.username}`
//     }
// }

// const userB = new user("siddharth")                

// console.log(userB.logit());

// this ko ek naya object dene ka kaam new karta hai.

// Bina new ke this undefined ho jaata hai, aur tum properties/methods assign nahi kar paoge.

// mtlb this  ka use krne se function ek constructor ki trh kaaam krta hai 

// kisi bhi constructor ko access krne ke liye new use krna pdega wrna wo error dega ya undefined dega 

//  new this ke liye ek naya object bana deta hai 

// class 

// agar ek class ki properties ko dusre mei use krna hai toh ye call wgera ki jrurat nhi hai 


class user {                                      
    constructor(username) {
        this.username = username
    }

    logit(){
        return `username is ${this.username}`
    }
}


class admin extends user {                           // extends se hum ek class ko dusre se connect krte hai 
    constructor(username,email,password) {
         super(username)   // super() jis class ko humne extend kiya hai hume uss class ke constructor ke andar jake 
         this.email = email                           // properties ko le aata hai 
        this.password = password
    }

}

const teacher1 = new admin("instructor","abcd@exmp.com","615646cghvh")

console.log(teacher1);
