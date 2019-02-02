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
	autor: String,
	titulo: String,
	fecha: Date,
	url: String,
	descripcion: String
});

var foroSchema = new Schema({
	autor: String,
	titulo: String,
	comentario: String,
	fecha: Date
	//respuestas
});

var videosSchema = new Schema({
	autor: String,
	titulo: String,
	fecha: Date,
	url: String,
	descripcion: String
});

var asignaturaSchema = new Schema({
	nombre: String,
	curso: String,
	contrasena: String, 
	foro: [foroSchema],
	videos: [videosSchema],
	apuntes: [apuntesSchema],
	autor: String
	//participantes
});

var AsignaturaData = mongoose.model('Asignaturas', asignaturaSchema);

var userDataSchema = new Schema({
	nombre: String,
   	usuario: String,
	contrasena: String,
	asignaturas: [{ type: Schema.ObjectId, ref: "Asignaturas" }]
});

var UserData = mongoose.model('UserData', userDataSchema);

const app = express();
const port = 8081;

app.use(cors());

app.use(express.static(__dirname + '/dist/project'));
app.use(bodyParser());
console.log(__dirname);
app.get('*', (req,res) => res.sendFile(path.join(__dirname + '/dist/project/index.html')));

app.post('/registro',function(req, res) {
	//comprobar si ya existe el usuario
	var usuario = new UserData({nombre: req.body.nombre, usuario: req.body.usuario, contrasena: req.body.contrasena, asignaturas: []});
	usuario.save(function (err) {
	if (err) return handleError(err);
		console.log('guardado');
	});
});

app.post('/inicio_sesion',function(req, res){
	UserData.findOne({"usuario":req.body.usuario,"contrasena":req.body.contrasena }).select({ "nombre": 1,"usuario": 1, "contrasena": 1, "_id": 0}).exec(function (err, usuario) {
		if(usuario == null){
			res.statusCode = 401;
			res.send('Cannot Login');
		}
		else{
			res.json(usuario);
		}
		
	});
});

app.post('/crear_asignatura', function(req, res){
	var asignatura = new AsignaturaData({ nombre: req.body.nombre, curso: req.body.curso, contrasena: req.body.contrasena, foro: [], videos: [], apuntes: [], autor: req.body.usuario });
	asignatura.save(function (err) {
	if (err) return handleError(err);
		UserData.findOne({ "usuario":req.body.usuario }).exec(function (err, results) {
			//comprobar que no existe el usuario (en teoria siempre deberia existir, pero por precaucion)
			results["asignaturas"].push(asignatura._id);
			results.save(function (err, updatedResults) {
				if (err) return handleError(err);
				res.sendStatus(200);
			});
		});
	});
});

app.post('/mis_asignaturas', function(req, res){
	UserData.findOne({ "usuario":req.body.usuario }).exec(function (err, results) {
		//Comprobar que el usuario existe
		AsignaturaData.find({ "_id": { $in: results["asignaturas"] }}).select({ "nombre": 1,"curso": 1, "autor": 1}).exec(function (err, results) {
			res.json(results);
		});
	});
});

app.post('/asignatura/:id', function(req, res){
	//Comprobar que el usuario sea participante
	AsignaturaData.findOne({ "_id":req.params.id }).exec(function (err, results) {
		res.json(results);
	});
});

app.post('/buqueda', function(req, res){
	
});

app.post('/add/video', function(req, res){
	AsignaturaData.findOne({ "_id":req.body._id }).exec(function (err, results){
		results["videos"].push({ autor: req.body.autor, titulo: req.body.titulo, url: req.body.url, fecha: new Date(), descripcion: req.body.descripcion});
		results.save(function (err, updatedResults) {
			if (err) res.status(500).send({ error: 'Something failed!' });
			else{
				res.sendStatus(200);
			}
		});
	});
});

app.post('/add/apuntes', function(req, res){
	AsignaturaData.findOne({ "_id":req.body._id }).exec(function (err, results){
		results["apuntes"].push({ autor: req.body.autor, titulo: req.body.titulo, url: req.body.url, fecha: new Date(), descripcion: req.body.descripcion});
		results.save(function (err, updatedResults) {
			if (err) res.status(500).send({ error: 'Something failed!' });
			else{
				res.sendStatus(200);
			}
		});
	});
});

app.post('/add/post', function(req, res){
	AsignaturaData.findOne({ "_id":req.body._id }).exec(function (err, results){
		results["foro"].push({ autor: req.body.autor, titulo: req.body.titulo, comentario: req.body.comentario, fecha: new Date()});
		results.save(function (err, updatedResults) {
			if (err) res.status(500).send({ error: 'Something failed!' });
			else{
				res.sendStatus(200);
			}
		});
	});
});

app.listen(process.env.PORT || 8081);




