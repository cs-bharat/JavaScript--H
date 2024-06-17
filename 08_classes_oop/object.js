function multiplayfive(num) {
     return num*5;
}
multiplayfive.power = 2;

console.log(multiplayfive(5));

console.log(multiplayfive.power); // object ki tarah hi behaviour he.
console.log(multiplayfive.prototype); // {} empty prototype.

// ----------------- //
function createUser(name , score){
    this.name  = name;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
   console.log(`price is ${this.score}`);
}

const chai = new createUser("chai" , 20);
const Tea = createUser("Tes" , 200);

chai.printMe();