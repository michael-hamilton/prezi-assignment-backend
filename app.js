var express = require('express'),
    app = express(),
    controller = require('./controller'),
    port = process.env.port || 3000;

app.get('/prezis', controller.getPrezis);

app.listen(port);