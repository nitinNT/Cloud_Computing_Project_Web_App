var express = require('express');
var app = express();
var mongooose=require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const axios=require('axios')


const url = 'mongodb+srv://nitin:slica@cluster0-uenlm.mongodb.net/test?retryWrites=true&w=majority';

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3000, function () {
    console.log('server is running..3000');
});




app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})

app.post('/save_details',async function(req,res){
  axios.post('http://localhost:8080/api/',req.body).then((res) => {
    console.log(res)
  }, (error) => {
    console.log(error);
  });
  res.sendFile(__dirname+'/status.html')
})