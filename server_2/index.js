var http = require('http');
var app = require('./app');

var server = http.createServer(app);
server.listen(3000);

console.log("Server up and running on port 3000");
