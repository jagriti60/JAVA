let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.onclick=() => {
  console.log('I was clicked...1');
  
}


button.addEventListener("click",()=>{
    alert("I was clicked...2")
})
button.addEventListener("click",()=>{
    alert("I was clicked...3")
})


let func=() => {
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
}
button.addEventListener("dblclick", func)
button.removeEventListener("dblclick", func)


button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by Right click Please")
})

document.addEventListener("keyup", (e)=>{  //event object
    console.log(e, e.key, e.keyCode)
})