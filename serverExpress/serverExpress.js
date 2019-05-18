//instance of the express framework
const express  = require("express");
const app = express();
//statement is need here

//Main Route
 app.get("/",function(req,res){
  res.send("Pagina Inicial");
 });

//Main empresa route
 app.get("/empresa",function(req,res){
  res.send("Informações sobre a empresa");
 });

//Main product route
 app.get("/produto",function(req,res){
  res.send("Informacoes Sobre Produto");
 });

//Main valor route
 app.get("/valor",function(req,res){
  res.send("Nossos valores sao...");
 });

//Main contato route
 app.get("/contato",function(req,res){
  res.send("Ligue para 19 991624560");
 });
//that need to be the last line
app.listen(9091,function(){
 console.log("Server is Running on the URL http://192.168.0.107:9091") ;
});
