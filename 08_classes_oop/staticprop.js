class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){ // koi object ese used nhi kar sakta
        return `232`;
    }
}

const hitesh = new user("hitesh");
// hitesh.logMe();
// console.log(hitesh.createId()); 
