var http = require('http');

http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHeader(200, {"Content-Type": "text/plain"});
        res.write("Hello world");
        res.end();
    }
    if (req.url == '/emisha') {
        res.writeHeader(200, {"Content-Type": "text/plain"});
        res.write("You have hit emisha");
        res.end();
    }
}).listen(3000);
