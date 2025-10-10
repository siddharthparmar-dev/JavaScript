function user(email) {
    // Use a backing property
    this._email = email;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });
}

const admin = new user("sid@gmail.com");
console.log(admin.email); // Output: SID@GMAIL.COM
