var express = require('express');
var multer = require('multer');

var app = express();
var multer = multer();

app.use(multer.array());
app.use(express.static('public'));

app.post('/',function(req,res){
    let JsonData = req.body;

     res.send(JSON.stringify(JsonData))
})


app.listen(8000,function(){
    console.log("Server run successfully");
})