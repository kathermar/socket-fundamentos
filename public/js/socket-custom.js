var socket = io();
socket.on('connect', function() {

    console.log('conectado al servidor');

});

//escuchar
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'kathermar',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

//escuchar
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor:', mensaje);
});