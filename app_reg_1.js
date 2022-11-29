var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/register.html');
});

app.post('/',function(req,res){
    // console.log(req.body);
    console.log(req.body.fname);
    console.log(req.body.lname);
    console.log(req.body.email);
    console.log(req.body.contno);
    res.sendStatus(200);
})

app.listen(7000);