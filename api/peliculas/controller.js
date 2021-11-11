const express = require('express');
const controladorPeliculas = express.Router();

/*
    GET -> OBTENER TODAS LAS PELICULAS
    GET -> OBTENER UNA PELICULA POR EL ID
    GET -> BUSCAR PELICULAS POR EL TITULO
    POST -> CREAR PELICULAS
    PUT -> ACTUALIZAR PELICULAS
    DELATE -> ELIMINAR PELICULAS

*/

controladorPeliculas.get('/obtenerPeliculas', function(request, response){
    //CAPTURAR LOS DATOS Y ENVIARLOS AL SERVICIO
    response.send("Listado de peliculas...");
});

module.exports = controladorPeliculas;