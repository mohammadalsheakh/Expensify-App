import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, update, remove, onValue, get, child, off, push, onChildRemoved } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAtCt3j_F4iwzXtgzJvyxFeOUSqeOaQUKg",
    authDomain: "expensify-bc971.firebaseapp.com",
    databaseURL: "https://expensify-bc971-default-rtdb.firebaseio.com",
    projectId: "expensify-bc971",
    storageBucket: "expensify-bc971.appspot.com",
    messagingSenderId: "650140683630",
    appId: "1:650140683630:web:e4baa24e4d06e6d05a057f",
    measurementId: "G-HEW7SB6RJX"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export default database 






































//**** note : crud means  : create ,  */

// /////////////////////////// write on the data base /////////////////////////////////////////////

// // this order will delte all the post data added we can use it when we need to add the data at first time 
// // set(ref(database, 'users/'), {
// //     name: `mohammad ibrahim`,
// //     properties : {
// //         prop1 : `swim`,
// //         props2 : `fot`
// //     },
// //     likes : {
// //         one : `chockolate`,
// //         two : `icecream`
// //     },
// //     jobs : {
// //         jobOne : `civil engineer`,
// //         jobTwo : `developer`
// //     }
// // }).then(() => {
// //     console.log(`the data sent`);
// // }).catch((erorr) => {
// //     console.log(`erorr :`,erorr);
// // })
// // // here the data in the firebase is changed 
// // // set(ref(database, 'users/'), {
// // //     name: `ahmad`,
// // //     properties: {
// // //         prop1: `tenis`,
// // //         props2: `fot`
// // //     },
// // //     likes: {
// // //         one: `chockolate`,
// // //         two: `icecream`
// // //     }
// // // })

// // // a way to cahgne the data :  by specifying the referance we need to change we can change what we need 
// // set(ref(database, 'users/name'), `ahmad`)
// // set(ref(database, 'name/name'), `mohammad`)

// // console.log(`i made a changes`);

// // //////////////////////////////////// removing data from the dataset we have ///////////////
// // remove(ref(database,`users/likes/two`))
// // .then(() =>{console.log(`the remove process is done`);})
// // .catch((error) =>{console.log(`erorr:`, error);} )
// // //by this code we deleted the refrence that we specified 
// // // ** other way to remove the data by set the data to null 


// // //////////////////////////////// updating the data ///////////////////////// 
// // // we should provide the referance that we need to update note that the update is happen in the level of the referance 
// // update(ref(database, `users/properties`),{
// //     prop1: `swimming`,
// //     props2: `fotball`,
// //     props3 : `learning`
// // }).then(() =>{console.log(`upadate done`);}).catch((erorr) => {console.log(`erorr` , erorr);})

// // update(ref(database, `users/jobs`),{
// //     jobOne : `farmer`
// // })


// //////////////////////////////reading data from database ///////////////////
// // first method : once method : used to read the data one time without changing when the data updates
// // get(ref(database, `users/jobs`))
// // .then((snapshot) => {console.log(snapshot.val());})
// // .catch((e) => {console.log(e);})

// // the second way : onValue method : used to update the data when the database is updated 
// // onValue(ref(database, `users/jobs`), (snapshot) => {
// //     console.log(snapshot.val());
// // })
// //  // now if we have change the data we have the snapshot value that we have will be changed 
// //  //note that we can change the data fron the database on the firebase or from the code 

// // setTimeout(function() {
// //     set(ref(database, `users/jobs/jobTwo`), `just a boy`)
// // }, 3500);
// // setTimeout(function () { // this used to end the subscrbe of the ref
// //     off(ref(database, `users`))
// // }, 7000);
// // setTimeout(function () {
// //     set(ref(database, `users/jobs/jobTwo`), `just a man`)
// // }, 9000);



// // //////////////////////////////push data ///////////////////////////// 
// // const expenses1 = {
// //     ex1 : `rent`,
// //     ex2 : `internet`
// // }

// // const expenses2 = {
// //     ex1: `ziyad`,
// //     ex2: `internet`
// // }
// // push(ref(database, `expenses`), expenses1)
// // push(ref(database, `expenses`), expenses2)





// //////////////////////////// storing the arrays in the database by using push ////////////////////
// // note : the firebase database dont support storing the arrays so we should do an alternative way for that 
// // mongodb uses the documents and the mysql use the rows 

// // the usage of push is that the firebase will give a random id for each object so that we can acess this 
// // object by the specific id 

// // const expenses1 = {
// //     ex1: `rent`,
// //     ex2: `internet`
// // }

// // const expenses2 = {
// //     ex1: `ziyad`,
// //     ex2: `internet`
// // }
// // push(ref(database, `expenses`), expenses1)
// // push(ref(database, `expenses`), expenses2)


// // get(ref(database, `expenses`)).then((snapshot) =>{
// //     const myArray = Object.entries(snapshot.val())
// //     console.log(myArray);
// // })

// get(ref(database, `expenses`)).then((snapshot) => {
//     const myArray = []
//     snapshot.forEach((myIndex) =>{
//         myArray.push({
//             id : myIndex.key,
//             ...myIndex.val()
//         })
//     })
//     console.log(myArray);
// })

// // onChild : add or remoce or .... this means that when this event happen a code will be excuted (call back)

// onChildRemoved(ref(database, `expenses`), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }) // this means that the child removed will be the snapshot we have 

