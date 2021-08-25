var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('<b>end</b> hello world');
    console.log('server runing on port 8081');
}).listen(8081);
console.log(' of file');