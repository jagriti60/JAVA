console.log('PROMISES');
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('I am a promise');
// resolve("successful")
// reject('error')
//     }, 4000);

// })
// function getData(dataId, datacall) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data',dataId);
//             resolve("Success")
//             reject("Failure")
//             if(datacall){
//                 datacall()
//             }
//         }, 3000);
//     })
// }
// getData(235)

// console.log('Using Promises');
// let getPromise = () => {
//   return  new Promise((resolve, reject) => {
//         console.log('I am a promise');
//         // resolve("success")
//         reject("Error")
//       })
// }
// let promise=getPromise()

// promise.then((res) => {
//   console.log('Promise resolved',res);
// })

// promise.catch(
//     (err) => {
//       console.log('Promise rejected',err);
//     }
// )
console.log('Promise Chain');

// console.log('prints 3data at 2s time interval using Promises');
// function async1(){
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Data1...');
//         resolve("Successfull...1")
//       }, 2000);
//     })
// }
// function async2(){
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Data2...');
//         resolve("Successfull...2")
//       }, 2000);
//     })
// }
//this prints all 3 data after 2s simultaneously.
// console.log('Fetching Data1...');
// p1=async1()
// p1.then(
//     (res) => {
//       console.log(res);
//     }
// )
// console.log('Fetching Data2...');
// p2=async2()
// p2.then(
//     (res) => {
//       console.log(res);
//     }
// )
//this prints the 3 data sequentially with a time interval of 2s
// console.log('Fetching Data1...');
// async1().then((res) => {
//       console.log(res);
//       console.log('Fetching Data2...');
//       async2().then((res) => {
//             console.log(res);}
//       )
//     }
// )


function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data',dataId);
            resolve("Success")
        }, 2000);
    })
}

// getData(1).then((res) => {
//     //   console.log(res);
//       getData(2).then((res) => {
//         //   console.log(res);
//           getData(3).then(() => {
//             // console.log(res);
            
//             }
//           )
//         }
        
//       )      
//     }
    
// )

getData(1)
.then(() => {
   return getData(2)
      .then(() => {
        return getData(3)
          .then()
        }
      )      
    } 
)