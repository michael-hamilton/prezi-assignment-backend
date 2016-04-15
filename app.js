var express = require('express'),
    app = express(),
    controller = require('./controller');

app.set('port', (process.env.PORT || 5000));
app.get('/prezis', controller.getPrezis);

app.listen(app.get('port'));