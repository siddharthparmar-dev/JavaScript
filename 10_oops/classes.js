class displayIt {
    constructor(username,email,password) {
        this.username = username
        this.password = password
        this.email = email
    }
        encryptPassword(){
            return `${this.password}qwerty`
        }

        changeUsername(){
            return `${this.username.toUpperCase()}`
        }
    
}


const admin = new displayIt("siddharth","abc@example.com",146464)

console.log(admin.encryptPassword());
