var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400)
  res.send('post recieved.');
  console.log('Header:\n', req.headers);
  console.log('Body:\n', req.body);
})

app.listen(8080, function(){
  console.log('App listening on port 8080');
});
