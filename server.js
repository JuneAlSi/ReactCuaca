var express = require('express');

// Create our app
var app = express();
var port = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static(__dirname + 'public'));

app.listen(port, function () {
  console.log('Express server is up http://localhost:3000 ' + port);
});
