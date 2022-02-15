

 //this is the basic element of the promsis, resolve for the 
 // the promis either resolve nor reject not both with eachother and we cant write the resolve function two times the first will be taken
 // we can resolve any data type like arrays and objects and others 
//  both reject and resolve takes a single argument 
// resolve come after then but reject come after then().catch()

/////////////////////////////// resolve case /////////////////////////
let myPromis = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve(`this is the test for the promisis`)
    }, 3000);
})


console.log(`before`);

myPromis.then((myData) =>{
    console.log(`Agreed`, myData);
})
console.log(`after`);


/////////////////////////////// reject case and resolve /////////////////////////
let myPromis2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject(`sonthing went wrong`)
    }, 3000);
})


console.log(`before`);

myPromis2.then((myData) => {
    console.log(`Agreed`, myData);
}).catch((erorr) =>{
    console.log(`erorr:`, erorr);
})
console.log(`after`);
