var express = require('express'),
    app = express(),
    controller = require('./controller');


app.use(function (res, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Resource", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.set('port', (process.env.PORT || 5000));
app.get('/prezis', controller.getPrezis);

app.listen(app.get('port'));