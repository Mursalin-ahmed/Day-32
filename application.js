var express = require('express');
app = express();


//application level middle_ware
// app.use(function(req,res,next){

//     console.log("I am application level middleware");
//     next();
// })
//routing midle_ware
app.use('/about',function(req,res,next){

    console.log("I am about level middleware");
    next();
})  
app.get('/',function(req,res){
    res.send("This is home page");
})
app.get('/about',function(req,res){
    res.send("This is about page");
})
app.listen(8000,function(){
    console.log("Server run successfully");
})