function setUserName(userName){
     this.userName = userName;
     console.log("Called success");
}

function createUser(userName,Email , Password){
    // setUserName(userName); // call to jayga but username print nhi hoga 
    setUserName.call(this , userName); // setUserName apna this used nhi karo me mera (this) deta hu usko used karo
    this.Email  = Email 
    this.Password = Password 
    // call current executaion context dusre function ko passe kar deta he (technically shai he)
}

const userData  = new createUser("john" , "john@32gmial.com" , "Po4342");
console.log(userData);