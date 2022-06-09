const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname+"/page.html");
});

app.post("/", function(req, res){
  res.send("<h2>nope</h2>");
});

app.listen(3000, () => console.log('example'));
