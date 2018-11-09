const express = require('express');
const http = require('http');
const path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://10.6.128.158:27017/test', {useNewUrlParser: true}, function(error){
	if (error) {
		throw error;
	}
	else {
		console.log('Conectado a MongoDB');
	}
});

var Schema = mongoose.Schema;

var userDataSchema = new Schema({
	nombre: String,
   	usuario: String,
   	contrasena: String
});

var UserData = mongoose.model('UserData', userDataSchema);

const app = express();

const port = 8081;

app.use(express.static(__dirname + '/dist/project'));

app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

app.get('/registro',function(req, res) {
	console.log('hola');
	/*var usuario = new UserData({nombre: 'cristian', usuario: 'ramos', contrasena: 'hola'});
	usuario.save(function (err) {
	if (err) return handleError(err);
		console.log('guardado');
	});*/
});

const server = http.createServer(app);

server.listen(port,() => console.log('Running...'+port));



