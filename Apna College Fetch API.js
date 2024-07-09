const URL = "https://cat-fact.herokuapp.com/facts"
// let promise=fetch(URL)
// console.log(promise);
let facts = document.querySelector('.fact');
let btn = document.querySelector('.btn');

// const getData = async () => {
//     console.log('Getting data...');
//     let response = await fetch(URL)
//     console.log(response);
//     let data = await response.json()
//     console.log(data);
//     console.log(data[0].text);
//     facts.innerText = data[3].text
// }


//using promises
function getData(){
    fetch(URL).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data);
      facts.innerText = data[3].text
    }
    )
    
}
btn.addEventListener("click", getData)
