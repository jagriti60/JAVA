// console.log('Asynchronous Programming...');

// console.log('one');
// console.log('two');
// setTimeout(() => {
//     console.log('Hello!');
// }, 3000);
// console.log('three');
// console.log('four');

// console.log('Callbacks');
// // sum is callback function
// function sum(a,b){
//     return a+b;
// }
// function calculator(a,b,SumCallbacks){
//     console.log(SumCallbacks(a,b));
// }
// calculator(7,5,sum);
// calculator(4,2,(a,b) => {  //function given directly in function call
//   console.log(a+b);
// }
// )


// console.log('prints 3data at 2s time interval');

//this prints all 3 data after 2s simultaneously.
// function getData(dataId){
//     setTimeout(() => {
//         console.log('data',dataId);
//     }, 2000);
// }
// getData(1)
// getData(2)
// getData(3) 

//this prints the 3 data sequentially with a time interval of 2s
function getData(dataId,datacall){
    setTimeout(() => {
        console.log('data',dataId);
        if(datacall){
            datacall()
        }
    }, 2000);
}
getData(1,() => { 
    console.log('getting data2...');
  getData(2, () => {
    console.log('getting data3...');
    getData(3)
  }
  )
}
)






