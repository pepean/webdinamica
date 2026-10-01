const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Mi servidor Node funciona</h1>');
});

server.listen(3000, () => {
    console.log('Servidor iniciado en http://127.0.0.1:3000');
    console.log('Presiona Ctrl+C para detener el servidor');
});