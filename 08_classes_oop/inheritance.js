class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
         console.log(`username is : ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username, email , password){
        super(username); // user class ko connect
        this.email = email;
        this.password = password;
    }

    addCource(){
        console.log(`a new cource was added : ${this.username}`);
    }
    // teacher class me username ko access kar raha hu ==> jo ki dusri class 
     // me declare he but use (super) keyword se access karke changes ho rahe he .
}


const chai = new Teacher("Neelam" , "neelam@12gmail.com" , "32");
chai.addCource();

const tea = new user("bharat");
tea.logMe();

// tea.logMe(); // access yes

console.log(chai instanceof user); // true
console.log(chai instanceof Teacher); // true
console.log(chai === tea); // false