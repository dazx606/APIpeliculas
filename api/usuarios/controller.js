const express = require('express');
const controladorUsuarios = express.Router();

/*
    GET -> LOGIN
    GET -> OBTENER USUARIO POR UN ID
*/

controladorUsuarios.get('/login', function(request, response){
    let datos = request.query;
    response.send('los datos del usuario son: ' + datos.usuario + " " +datos.contrasena);
});

module.exports = controladorUsuarios;