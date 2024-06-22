const descripter  = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descripter);

// Object.defineProperty(descripter , "PI" , {
//     writable:true,
//     enumerable:true

// })

// console.log(Object.getOwnPropertyDescriptor(descripter , "PI"));
// console.log(descripter);
// PI value not changes //

// not changes //
/* 
 pi: 3.141592,
 writable : false,
 enumerable: false,
 configurable:false,
*/

//some property hamri defind karenge //
// Object.create(null) // factory function

const chaiObj ={
    name:'constantName',
    price : 200,
    isAvailable : true 
}  

console.log(Object.getOwnPropertyDescriptor(chaiObj , "name"));

Object.defineProperty(chaiObj , "name" ,{
    writable:false,
    enumerable:false,
    configurable:false
})

console.log(Object.getOwnPropertyDescriptor(chaiObj , "name"));

