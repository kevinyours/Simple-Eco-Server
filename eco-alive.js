const http = require('http');

http.createServer((request, response) => {

    request.on('error', (err) => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    
    response.on('error', (err) => {
        console.error(err);
    });

    if(request.method === 'GET') {

        console.log('I am alive....!');
        response.end('I am alive!...');
    } else {

        response.statusCode = 404;
        response.end();
    }
}).listen(7070);