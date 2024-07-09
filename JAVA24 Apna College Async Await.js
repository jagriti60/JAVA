// function api(){
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Weather data');
//         resolve(200)
//       }, 2000);
//     })
// }
// async function getWeatherData(){
//     await api();
//     await api();
//     await api();
// }
// getWeatherData()

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data',dataId);
            resolve("Success")
        }, 2000);
    })
}
async function Data(){
    console.log('Getting Data1...');
   await getData(1)
   console.log('Getting Data2...');
   await getData(2)
   console.log('Getting Data3...');
   await getData(3)
   console.log('Getting Data4...');
   await getData(4)
}
Data()