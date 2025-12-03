express= require('express')
Books = require('./schema')
const connectDB = require('./MongodbConnect').default; 
var app =express()
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
console.log("BOOKS",Books)
app.get('/',function(req,res){console.log("this is default")
res.send("This is default")})