// var con = require('./connection')
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/register.html');
});



app.post('/',function(req,res){
    console.log(req.body);
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var contno = req.body.contno;
    


    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "CyberSquare"
      });



    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO student_register(fname,lname,email,contno) VALUES('"+fname+"','"+lname+"','"+email+"','"+contno+"')";
        con.query(sql,function(error,result){
            if(error) throw error;
            res.send('Student Register Successful'+result.insertId);
        });

    });   

});

app.listen(3000);