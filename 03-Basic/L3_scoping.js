// ++++++++++++ scoping +++++++++++++++++//
function one(){
    let name = "Prajapati";
    function two(){
        let webName = "youtube";
        console.log(name);
    }
    // console.log(webName); // error
    two();
}
one();


if(true){
    let username = "kumhar";
    if(username === "kumhar"){
        let channelName = " Chai or code";
        console.log(username + channelName);
    }
    // console.log(channelName); // error
}


// +++++++++++++ interesting ++++++++++++ 
  // +++++ hosting concept in js ++++++ //
console.log(addOne(5)); // error thorow nhi karega //

function addOne(num){
     return num+1;
}

// console.log(storeValue()); // error throw karega//
const storeValue = function(num){
    return num+2;
}

