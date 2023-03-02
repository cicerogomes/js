var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("Seja bem vido ao site!");
}).listen(8181);

