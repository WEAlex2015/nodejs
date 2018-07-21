/**
 * node-http 服务端
 */
let http = require('http');
// 创建服务器
// let server = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.end("<h1>hello1111</h1>");
// });

let server = http.createServer(function(request,response){
    console.log(request.url);
    if(request.url === '/alex' || request.url === ''){
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end("<h1>hello alex</h1>");
    }else{
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end("404 not found");
    }
})

server.listen(9999);

console.log('server start@http://localhost:9999');