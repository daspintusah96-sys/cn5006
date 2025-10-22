
var express=require("express") 

var fs= require("fs") 

var app=express()


var bodyParser = require("body-parser"); 

app.get('/',function(req,res){
res.send("hello it is my first express application")
})
app.get('/about',function(req,res){
res.send("hello from the about page")
})
app.get('/about',function(req,res)
{ res.send("This is basic express application ")
})
app.get('/users/:userId/books/:bookId', function (req, res) { res.send(req.params)
})

app.listen(5000,function(){console.log("server is running on port 5000")})
app.get('/Getstudents',function (req,res)

{ studentdata={}
 fs.readFile(_dirname + "/" + "student.json", function (err,data) { console.log(data);
    
