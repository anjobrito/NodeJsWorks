const express  = require("express");
const app = express();

app.get("/",function(req,res){
  res.sendFile(__dirname + "/resources/html/index.html");
});


app.listen(9090);
