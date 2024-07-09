console.log('Exercise12');

box = document.getElementsByClassName("box").children
console.log(box);
function randomcolor() {
    let a = Math.random() * 300  
    let b = Math.random() * 300
    let c = Math.random() * 300
    return `rgb(${a}, ${b}, ${c})`
}

let color = setInterval(() => {
    box[0].style.background = randomcolor();
    box[1].style.background = randomcolor();
    box[2].style.background = randomcolor();
    box[3].style.background = randomcolor();
    box[4].style.background = randomcolor();
    box[0].style.color = randomcolor()
    box[1].style.color = randomcolor()
    box[2].style.color = randomcolor()
    box[3].style.color = randomcolor()
    box[4].style.color = randomcolor()
}, 1000)

// console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children 


// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })

