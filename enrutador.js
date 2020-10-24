var http = require('http');
const { request } = require('https');
fs = require('fs');

http.createServer(function(solicitud, respuesta) {
    respuesta.writeHead(200, { 'Content.Type': 'text/html' });

    var url = solicitud.url;
    var metodo = solicitud.method;
    var header = solicitud.headers;
    var estado = solicitud.statusCode;

    if (url === '/contacto' && metodo === "GET") {
        var html = fs.readFileSync('./contacto.html');
        respuesta.write(html);
        respuesta.end;
    } else if (url === '/contacto' && metodo === "POST") {
        var html = fs.readFileSync('./confirm.html');
        respuesta.write(html);
        respuesta.end;
    } else if (url === '/nosotros') {
        var html = fs.readFileSync('./nosotros.html');
        respuesta.write(html);
        respuesta.end;
    } else if (url === '/servicios') {
        var html = fs.readFileSync('./servicios.html');
        respuesta.write(html);
        respuesta.end;
    } else if (url === '/') {
        var html = fs.readFileSync('./index.html');
        respuesta.write(html);
        respuesta.end;
    } else {
        var html = fs.readFileSync('./error.html');
        respuesta.write(html);
        respuesta.end;
    }
}).listen(8080, function() {
    console.log('servidor iniciado');

});