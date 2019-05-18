const express = require("express");
const app = express();

app.get("/ola/:nome",function(res,req){
  res.send("Hi motherfucker..."+req.params.nome);
});

app.listen(9190);
