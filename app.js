var express = require('express'),
    app = express(),
    controller = require('./controller');

app.get('/prezis', controller.getAllPrezis);
app.get('/prezis/search', controller.searchPrezis);

app.listen(3000);