const http = require('http');

const server = http.createServer(function(request, response,){
  // console.log(response.url);
  // console.log(request.method);
  if(request.url === "/") {


    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end("main")
  }
  if(request.url === "/sub") {
    
    setTimeout(function(){
      response.writeHead(200, {"Content-Type" : "text/html"})
      response.end("hello")
    }, 1000)
  }
  

});
server.listen(8080);