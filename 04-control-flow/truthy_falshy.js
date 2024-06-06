//---- falsey values -----//
// 0,-0 , false,BigInt 0n, "" , null, undefined, NaN

//---- truty values -----//
// "false" ., [] , {} , "0" , " " , function(){} // 


const userArray = [];
// how to check ki array is empty //
if(userArray.length === 0 ){
    console.log("Userarray is empty..!!!");
}

const userObj  = {};
if(Object.keys(userObj).length === 0)
    {
        console.log("UserObject is empty.");
    }


    // imp to interview for all //

    /*
       false == 0    => true
       false == '0'  => true 
       0 == ''       => true 
    */


   // nullish coalescing   operator : (??) ==> null,undefined
     let val1,val2,val3,val4;
     val1 = 5 ?? 10;
     console.log(val1); // 5

     val2 = null ?? 10 ; // database me used karenge(firebase.)
     console.log(val2);

     val3 = undefined ?? 30 ?? 90 ; // 30
     console.log(val3); 
