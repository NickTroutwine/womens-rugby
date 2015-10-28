var express = require('express');
var app = express(); 
var path = require('path');

app.all('/',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/members', function (req, res){
  res.sendFile(path.join(__dirname, '/../client/app/index.html'));
});
app.get('/schedule', function (req, res){
  res.sendFile(path.join(__dirname, '/../client/app/index.html'));
});

app.use(express.static('client'));


app.listen(process.env.PORT || 3000);


module.exports = app;
