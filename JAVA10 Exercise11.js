console.log('Exercise 11');
const prompt= require('prompt-sync')();
console.log('Factorial of number');

//using for loop...

// let a= parseInt (prompt("Enter a number") )
// let fact=1;
// for (let i = 1; i <=a; i++) {
//     fact*=i
// }
// console.log(fact);

//using reduce
let arr=[]
let a= parseInt (prompt("Enter a number") )
for (let i = 1; i <= a; i++) {
    arr.push(i)
}
let fact=(a,b) => {
  return a*b
}

console.log(arr.reduce(fact));



 