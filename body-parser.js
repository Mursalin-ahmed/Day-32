var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.post('/',function(req,res){
    let JSONData = req.body;    
    let JSONstringify = JSON.stringify(JSONData);
    let name = JSONData['name'];
   // res.send(JSONstringify);
    res.send(name);
})

app.listen(8000,function(){
    console.log("Server run successfully");
})