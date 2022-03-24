var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index_get', {
  });
});

app.get('/users', function (req, res) {
  const fs = require('fs');
  const path = require('path');

  let rawdata = fs.readFileSync(path.resolve(__dirname, 'users.json'));
  let users = JSON.parse(rawdata);
  res.render('index_post', {
    users: users,
  });
});

app.listen(8081);
console.log('Server is listening on port 8081');