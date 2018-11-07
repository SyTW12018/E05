const express = require('express');
const http = require('http');
const path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://myTester:xyz123@10.6.129.152:27017/test',  { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("hola")
});

var Schema = mongoose.Schema;

var userDataSchema = new Schema({
   usuario: String,
   contrasena: String
});

var UserData = mongoose.model('UserData', userDataSchema);

const app = express();

const port = 8081;

app.use(express.static(__dirname + '/dist/project'));

app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port,() => console.log('Running...'+port));



