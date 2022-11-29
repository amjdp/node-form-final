const express = require('express');
const port = process.env.PORT || 5000; // this is port number

const app = express(); // this is our app or instance of express

// API Middlewares

app.use(express.json()); // This is to accept data in json format

app.use(express.urlencoded()); //This is to decode teh data send through html form

// app.use(express.static('public')); // This is to serve our public folder as a static folder
 
//API ROUTES

app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/form',(req,res)=>{
    console.log(req.body); // The data we get is in the body of the request
})


//This is to listen on port
app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
});