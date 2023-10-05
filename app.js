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
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(data);
      }
    })
  }
  if(request.url === "/sub") {
    setTimeout(function(){
      let subPage = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            overflow-x: hidden;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          li {
            list-style: none;
          }
          
          #root {
            width: 100vw;
            height: 100vh;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          #root div {
            width: 50vw;
            height: 50vh;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          #root div p {
            font-size: 32px;
          }
          #root div p span {
            font-size: 35px;
            color: red;
          }
          #root div a {
            width: 150px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-weight: 700;
            background-color: #777;
            margin-top: 15px;
          }
        </style>
        <title>MainPage</title>
      </head>
      <body>
        <div id="root">
          <div>
            <p>하위</p>
            <a href="http://localhost:8080">Main 페이지로 이동</a>
          </div>
        </div>
      </body>
      </html>`;

      response.writeHead(200, {"Content-Type" : "text/html"})
      response.end(subPage);
    }, 1000);
  }
  

});
server.listen(8080);