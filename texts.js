// // here we will create an express server to serv the production  cuz neither the dev or live server is good for production 

// const path = require(`path`)
// const express = require('express')
// const app = express()
// const publicPath = path.join(__dirname, `..`)
// const port = process.env.PORT || 9000
// // we use this to register some our midlle where and it means somthink that runs in each request that is mean
// // it will run a block of code in each request 

// app.use(express.static(publicPath))// this used to connect the express to the project 

// // here we will fixthe proplem of the 404 and this done by make the user back to index.html page wgen he will go to the 
// // any other place 
// app.get(`*`,(req, res) =>{
//     res.sendFile(path.join(publicPath, `index.html`))
// } )

// app.listen(port, () => {
//     console.log(`the server is up `);
// })// (9000)is the port that good for all the operating systems 
