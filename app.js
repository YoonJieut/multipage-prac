const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response,){
  // console.log(response.url);
  // console.log(request.method);
  if(request.url === "/") {
    fs.readFile('index.html','utf8',function(err, data){
      if(err) {
        console.error("에러가 발생했습니다.");
      }
      else {
        console.log(data);
      }
    })

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