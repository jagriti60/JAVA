console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor
// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "green";
// })
// let tag=document.getElementsByTagName("div")
// console.log(tag)
// console.log(tag[4].matches("#redbox"))
// console.log(tag[2].matches("#redbox"))
// console.log(tag[2].closest("#redbox"))
// console.log(tag[2].closest(".container"))
// console.log(tag[2].closest("html"))
let doc=document.querySelector(".container").contains(document.querySelector("#redbox"))
console.log(doc)
let docu=document.querySelector(".container").contains(document.querySelector("body"))
console.log(docu)