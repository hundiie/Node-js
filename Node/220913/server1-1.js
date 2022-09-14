const http = require('http');

http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})

Server.listen(8080);

Server.on('listening',()=> {
    console.log('8080번 포트에서 서버 대기중');
});

Server.on('error',(error)=> {
    console.error(error);
});