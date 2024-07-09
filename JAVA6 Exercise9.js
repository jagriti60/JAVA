//Exercise9

let random =Math.random();
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if (random>0.1){
    alert(`Result ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c=obj[c];
    alert(`Result ${eval(`${a} ${c} ${b}`)}`)
}