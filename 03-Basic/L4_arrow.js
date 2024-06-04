// ++++ arrow  function and this ++++++//
/* arrow function => this => objects */

const user = {
    username : "bharat kumar",
    price : 1200,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to my website.`)
        // console.log(this); // current context value return
    }
}
// user.welcomeMessage();
// user.username = "viswa";
// user.welcomeMessage();

console.log(this); // {} object return node ke under
// console.log(this); 
/*
interview...
    browser me console ke under run karenge tab return (window)
    object = browser me mostly (global object => window object)
 */

function chai(){
    let nameUser1 = "bharat"; 
    /* function ke under (this) is not allow */
    console.log(this.nameUser1); // performance vagera milegi but 
}
// chai();

const chai2 = function(){
    let nameUser2 = "prajapti";
    console.log(this.nameUser2);
}
// chai2();

const chai3 = () =>{
    let nameUser3 = "kumhar";
    console.log(this.nameUser3)
}
// chai3();

// all are undefined honge. //

//+++++ impleashet and expleashet result ++++++//
 // expleaseat result //
const addOne = (Num1, Num2) => {
    return Num1 + Num2 ;
}

// impleaseat result //
const addOne2  = (Num1,Num2) => Num1 + Num2;
console.log(addOne2(2,3));

// mostly react me used hoga () used karne per return nhi kiya jata //
const addOne3 = (Num1,Num2) => (Num1 +Num2);
console.log(addOne3(8,8));

const object = (n1) => ({name:"object-return"});
console.log(object((5)));
