//importar los modulos
const express = require('express');
const bodyParser = require('body-parser');
const controladorPeliculas = require('./api/peliculas/controller')
const controladorUsuarios = require('./api/usuarios/controller')

//iniciar la configuración 
const app = express();
app.use(bodyParser.json());  //combierte en json el cuerpo de nuestra peticion 
app.use(bodyParser.urlencoded({extended:true})); //
const port = 3300;

//iniciar las rutas 
app.use("/api/peliculas", controladorPeliculas);
app.use("/api/usuarios", controladorUsuarios);

//configurar donde el api va a estar monitoreando las peticiones 
app.listen(port,function(){
    console.log("API Ejecutandse en el puerto" + port)
});