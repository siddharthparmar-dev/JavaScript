// class user {
//     constructor(email,password) {
//         this.email = email
//         this.password = password
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }

//     set password(value){
//         this._password = value.toUpperCase()
//     }
// }

// getter and setter 

// basically get se hum class ke bhr jab bhi ye class use hogi toh uski values ko get kr skte hai 
//get(){} iske function ke andar hum us value of return krenge this. ke through
// set(){} jo value hume get() se mili hai usko hum apne variable m set kr denge 

// example

// humne get password(){} banaya isse hume user class jb bhi use hogi toh wha se password mil jayega 
// get(){} ke andar humne uss value ko return kra h this._password ke through 
// _password '_' underscore isliye use kiya hai kyuki hum this.password ko pehle hi declare kar chuke hai 
// underscore lagane se wo apas m clash ni krenge
// fir humne set(){} create kra hai aur uske parameter mei ek variable declare kra h jisme get wali value store kri h uske baad 
// this._password mei uss value ko modify krke upper case m kr diya hai 

class user {
    constructor(email,password) {
        this.email = email
        this.password = password
    }
    get password(){
        return `${this._password}encrypt`
    }

    set password(value){
        this._password = value.toUpperCase()
    }

    get email(){
        return this._email
    }

    set email(newEmail){
         this._email = newEmail.toUpperCase()
    }
}


const admim = new user("abc@gmail.com","qwki98df4")

console.log(admim.password,admim.email);
