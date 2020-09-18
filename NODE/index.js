const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        if (err) {
            res.end('500');
        } else {
            res.end(data);
        }
    })
}).listen(3000);