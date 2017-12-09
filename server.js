var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
//const config = require('./config/database');
mongoose.Promise = global.Promise;
var path = require('path');
var url = require('url');
const routes = require('./routes');
const model = require('./model');
var url = "mongodb://revathy:admin123@ds133746.mlab.com:23896/employees";

//var config = "mongodb://localhost:27017/employees";
//mongoose.connect(config.uri, {
 //   useMongoClient: true,
//  }, (err) => {
    // Check if database was able to connect
 //   if (err) {
 //     console.log('Could NOT connect to database: ', err); // Return error message
  //  } else {
  //    console.log('Connected to ' + config.db); // Return success message
  //  }
 // });
mongoose.connect(url)
    .connection
        .on('connected',function(){
            console.log("successfully connected to "+ url)
        })
        .on('error',function(err){
            console.log("database error "+ err)
        })
var app = express();
//const port = process.env.PORT || 3000;
var port = 3000 ;

var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(cors());
app.use('/api/employees', router);
app.listen(process.env.PORT || 3000);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname +'/public/index.html'));
  });

