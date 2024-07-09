let x=5;
let y=6;
console.log(x+y);
console.log(x-y);
console.log(y-x);
try{
    console.log(x+z);
}
catch(err){
console.log(err);
}
console.log(x*y);
console.log(x**y);
console.log(y+x);
console.log(y+x);
console.log(y+x);


let a = prompt("Enter first number")
let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)
// console.log(sum);

function main(){ 
    let x = 1; 
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {      //if x is not defined
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()