mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin:v0r6uNGGv0pPuMtE@cluster0.owjou30.mongodb.net/week8';

mongoose.connect(MONGO_URI, {useUnifiedTopology: true,useNewUrlParser: true});

const db = mongoose.connection; 
db.on('error', function(err){console.log("Error occured during connection"+err)})
db.once('connected', function() {console.log(`Connected to ${MONGO_URI}`);});

// creating the scheme
const PersonScheme = new mongoose.Schema({ name: {type: String, required: true},age: Number, Gender:String, Salary:Number});

// creating model named as modelname with collection named as personCo

const person_doc = mongoose.model('modelname', PersonScheme,'personCollection');
// creating a single document
const doc1 = new person_doc({ name: 'Jacky',age:362,Gender:"Male",Salary:3456 });
doc1
 .save()
 .then((doc1) => {
 console.log("New Article Has been Added Into Your DataBase.",doc1);
 })
 .catch((err) => {
 console.error(err);
 });