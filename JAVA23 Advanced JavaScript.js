
console.log('IIFE');
async function sleep (){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
(async function main(){
    let a=await sleep()
    console.log(a);
    let b=await sleep()
    console.log(b);
})()

let [a,b]=[23,98,54,63]
console.log(a,b);

let [x, y, ...rest] = [1, 5, 7, 8, 9, 10]
    console.log(x, y, ...rest)//rest is just a variable
    console.log(x, y, rest)

const sum = async (a, b, c)=>{
        return a+b+c
    }
(async function main(){ 
    console.log(a1);  //hoisting
    let obj = {
        a: 1, 
        b: 2,
        c: 3
    }

    let {a, b} = obj
    console.log(a,b)

    let arr = [1, 4, 6]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr)) //...=spread operator
    let a1 = 6;
    
})()

const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}