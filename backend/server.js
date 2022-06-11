const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/page.html");
});

app.listen(3000, () => console.log('Server is running at: 3000'));
