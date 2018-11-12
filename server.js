const express = require('express');
const http = require('http');
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/usuarios', {useNewUrlParser: true}, function(error){
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
app.use(bodyParser());

app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

app.post('/registro',function(req, res) {
	console.log(req.body);
	var usuario = new UserData({nombre: req.body.nombre, usuario: req.body.usuario, contrasena: req.body.contrasena});
	usuario.save(function (err) {
	if (err) return handleError(err);
		console.log('guardado');
	});
});

app.get('/users',function(req, res){
	UserData.find({}).exec(function (err, result) {
		var usuarios = result;
		console.log(usuarios);
		res.json(usuarios);
	});
})

const server = http.createServer(app);

server.listen(port,() => console.log('Running...'+port));



