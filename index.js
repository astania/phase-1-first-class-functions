function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function addNumbers (num1, num2){
        console.log(num1 + num2);
    }
}

function returnsAnAnonymousFunction(){
    return function (){console.log("I am anon")}
    }
    
