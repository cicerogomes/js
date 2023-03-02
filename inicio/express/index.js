const express = require("express"); // Importando o express
const app = express(); // Inciano o express

app.get("/",function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
});

app.listen(4000,function(erro){
    if (erro){
        console.log("Ocorreu um erro no servidor!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})