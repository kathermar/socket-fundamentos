const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');

    });
    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // la funcion broadcast nos permite que el mesaje se envie a todos los clientes
        client.broadcast.emit('enviarMensaje', data);
        /*     if (mensaje.usuario) {
                 callback({
                     resp: 'Todo salio bien'
                 });
             } else {
                 callback({
                     resp: 'Todo salio mal'
                 });
             }*/

    });

});