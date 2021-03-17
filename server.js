var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('halaman/hal1');
});

app.get('/hal2', function(req, res) {
    res.render('halaman/hal2');
});

app.listen(8000);
console.log('server terbuka diport 8000');