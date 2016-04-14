var express = require('express'),
    app = express(),
    controller = require('./controller');

app.use(function (res, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Resource", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.get('/prezis', controller.getAllPrezis);
app.get('/prezis/search', controller.searchPrezis);

app.listen(3000);