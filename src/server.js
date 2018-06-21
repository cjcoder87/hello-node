var http = require('http');
var fs = require('fs');
//Request handlers are for requests
//Event listener knows w
var requestHandler = function(request, response){
  // response.write('hello node server');
//   ressponse.write('Hello World!');
var a = fs.readFileSync('./src/index.html');
if(request.url.indexOf('contact')){

}

  response.end(a);//sends response back
}

// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World!');
//   response.end();
// }).listen(9000);

var server = http.createServer(requestHandler); //creates server

server.listen(9000, () =>{
console.log('server is a live');


});