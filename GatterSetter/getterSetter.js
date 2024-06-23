/*
getter and setter used for (recieved value and sending value) on memory 
 process that process override karne ke liye getter setter used.
*/

class User{
    constructor(email , password){
        this.email =   email,
        this.password = password
    }

    // constructor and getter/Setter some variable name cant be used //
    get password(){
        return `${this._password.toUpperCase()}hitesh`;
    }
    set password(value){
        this._password = value
        console.log(value); // Abc032
    }

}

const Hitesh = new User("radom@31gmail.com" , "AbcO32");
console.log(Hitesh.password); // Abc032 ==> ABC032
console.log(Hitesh.email); // random@31gmail.com


// old (defineProperty syntax) get/set  function based //

function User2(email,password){
    this._email = email;
    this._password = password 

    Object.defineProperty(this , "email" , {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this , "password" , {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai  = new User2("chai@code.gmail.com" , "32Sbn)chai");
console.log(chai.email);