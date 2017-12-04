var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
const config = require('./config/database');
mongoose.Promise = global.Promise;
//var config = "mongodb://localhost:27017/employees";
mongoose.connect(config.uri, {
    useMongoClient: true,
  }, (err) => {
    // Check if database was able to connect
    if (err) {
      console.log('Could NOT connect to database: ', err); // Return error message
    } else {
      console.log('Connected to ' + config.db); // Return success message
    }
  });
//mongoose.connect(config)
    //.connection
        //.on('connected',function(){
           // console.log("successfully connected to "+ config)
       // })
       // .on('error',function(err){
           // console.log("database error "+ err)
        //})
var app = express();
const port = process.env.PORT || 8000;
//var port = 3000 ;

var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + './public'));

app.use(cors());
app.use('/api/employees', router);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname +'/public/index.html'));
  });
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})