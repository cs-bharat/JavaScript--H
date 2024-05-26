let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());

// interview
console.log(typeof myDate); // object

const myCreateDate = new Date(2024 , 0 ,19) // month start with (0)=jan
console.log(myCreateDate.toLocaleString());

const myCreateDate2 = new Date("06-19-2004") // mm-dd-yy
console.log(myCreateDate2.toLocaleString());


// hotel website ya pooling banay tab//
let myTimeStamp = Date.now();
console.log(myTimeStamp); // milisecond value
console.log(Math.floor(Date.now()/1000));

// (``) ==> string interpolation kehete he //

myDate.toLocaleString('default' , {
    weekday:"long"
})