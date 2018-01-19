const http = require('http');
const home = require('./routes/home.js')
http.createServer(function(req,res){
  if (req.url === '/') {
    home(req,res)
  }
}).listen(3000);
console.log('Сервер запущен на localhost:3000; нажмите Ctrl-C для завершения....');
