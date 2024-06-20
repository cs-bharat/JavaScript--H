// class and constructor //
class FirstUserCreate{
    constructor(username , email , password){
       this.username  = username;
       this.email = email;
       this.password  = password;
    }

    // class ke under hi dusre method likh sakte he .//
    encryptPassword(){
        return `${this.password}protect`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }

}

const StoreData  = new FirstUserCreate("bharat kumar" , "user1@gmail.com" , "13rd@")
console.log(StoreData.encryptPassword());
console.log(StoreData.changeUserName());


//--- class nhi hoti tab function used kar sakte he ---//
function SecondUserCreate(username , email , password , age){
 this.username  = username;
 this.email = email ; 
 this.password = password;
 this.age = age;
}

// uper vala function object ki tarah hi behave karta he
SecondUserCreate.prototype.encryptPassword = function(){
    return `${this.password}protect`
}

SecondUserCreate.prototype.changeUserName = function(){
   return `${this.username.toUpperCase()}`
}

const StoreData2 = new SecondUserCreate("bharat" , "bharat@gmail.com" , "32@3v" , "19")
console.log(StoreData2.encryptPassword());
console.log(StoreData2.changeUserName());