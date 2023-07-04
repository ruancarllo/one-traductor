const http = require('http');
const fs = require('fs');

var port = 3030;

let server = http.createServer((request, response) => {
	fs.readFile(__dirname + '/app.html', (error, data) => {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		response.end();
	});
});

server.listen(port, () => console.log(`App running at http://localhost:${port}`));