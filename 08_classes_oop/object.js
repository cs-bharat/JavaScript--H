function multiplayfive(num) {
     return num*5;
}
multiplayfive.power = 2;

console.log(multiplayfive(5));

console.log(multiplayfive.power); // object ki tarah hi behaviour he.
console.log(multiplayfive.prototype); // {} empty prototype.

// -------- concept in new keyword understand --------- //
function createUser(name , score){
    this.name  = name;
    this.score = score;
}

// increment function basic
createUser.prototype.increment = function(){
    this.score++;
}

// print function he basic 

  createUser.prototype.printMe = function(){
    // this mtlb (jis) ne bhi call kiya he //
    console.log(`name is ${this.name}`);
   console.log(`price is ${this.score}`);
}

const chai = new createUser("chai" , 20);
const Tea = new createUser("Tes" , 200);

chai.printMe();
// chai.increment();
// chai.printMe();

Tea.printMe();


/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/