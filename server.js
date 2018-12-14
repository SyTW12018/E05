const express = require('express');
const http = require('http');
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://admin:adminpass1@ds135413.mlab.com:35413/proyectostyw', {useNewUrlParser: true}, function(error){
	if (error) {
		throw error;
	}
	else {
		console.log('Conectado a MongoDB');
	}
});

var Schema = mongoose.Schema;

var apuntesSchema = new Schema({
	id: Number,
	autor: String,
	titulo: String,
	peso: Number,
	fecha: Date
});

var foroSchema = new Schema({
	id: Number,
	autor: String,
	titulo: String,
	comentario: String,
	fecha: Date
});

var videosSchema = new Schema({
	id: Number,
	autor: String,
	titulo: String,
	url: String
});

var Apuntes = mongoose.model('Apuntes', apuntesSchema);
var Foro = mongoose.model('Foro', apuntesSchema);
var Videos = mongoose.model('Videos', apuntesSchema);

var asignaturaSchema = new Schema({
	id: Number,
	nombre: String, 
    	apuntes: Date,
	foro: 	[{ type: Schema.ObjectId, ref: "Foro" }],
	videos: [{ type: Schema.ObjectId, ref: "Videos" }],
	apuntes: [{ type: Schema.ObjectId, ref: "Apuntes" }]
});

var Asignaturas = mongoose.model('Asignaturas', asignaturaSchema);

var userDataSchema = new Schema({
	nombre: String,
   	usuario: String,
	contrasena: String,
	asignaturas: [{type: Schema.ObjectId, ref: "Asignaturas"}]
});

var UserData = mongoose.model('UserData', userDataSchema);

const app = express();
const port = 8081;

app.use(cors())

app.use(express.static(__dirname + '/dist/project'));
app.use(bodyParser());

app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

app.post('/registro',function(req, res) {
	console.log(req.body);
	var usuario = new UserData({nombre: req.body.nombre, usuario: req.body.usuario, contrasena: req.body.contrasena, asignaturas: []});
	usuario.save(function (err) {
	if (err) return handleError(err);
		console.log('guardado');
	});
});

/*app.get('/users',function(req, res){
	UserData.find({}).select({ "nombre": 1,"usuario": 1, "contrasena": 1, "_id": 0}).exec(function (err, result) {
		var usuarios = result;
		res.json(usuarios);
	});
})*/

app.post('/inicio_sesion',function(req, res){
	UserData.find({"usuario":req.body.usuario,"contrasena":req.body.contrasena }).select({ "nombre": 1,"usuario": 1, "contrasena": 1, "_id": 0}).exec(function (err, usuario) {
		if(usuario == []){
			res.statusCode = 401;
			res.send('Cannot Login');
		}
		else{
			res.json(usuario);
		}
		
	});
})



const server = http.createServer(app);

server.listen(port,() => console.log('Running...'+port));




