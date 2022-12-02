var express = require('express');
app = express();


//Queary calling using url
// app.get('/one',function(req,res){
//     let firstName = req.query.firstName;
//     let secondName = req.query.secondName;
//     res.end(firstName + " " + secondName);
//     res.end("This is simple get request");
// })
//Work with Header
// app.get('/',function(req,res){
  
//     let firstName = req.header('firstName');
//     let lastName = req.header('lastName');
//     let Connection = req.header('Connection');
//     res.end(Connection);

    
    
// })
//Post function

// app.post('/',function(req,res){
//        let firstName = req.query.firstName;
//        let secondName = req.query.secondName;
//        res.send(firstName + " " + secondName); 

// })
app.post('/',function(req,res){
  let userName = req.header("userName");
  let password = req.header("password");
  res.end("User name: " + userName + "password:"+password)
})

app.listen(8000,function(){
    console.log("Server run successfully");
})