var prezis = require(__dirname+'/prezis.json');

//Send all the prezis in the JSON file
module.exports.getAllPrezis = function(req, res, next) {
    res.send(prezis);
};

//Loop over each of the prezis in the JSON file and look for matches against the title property
module.exports.searchPrezis = function(req, res, next) {
    var _matches = [];
    for(var i = 0; i < prezis.length; i++) {
        if(prezis[i].title == req.query.title) {
            _matches.push(prezis[i]);
        }
    }
    res.send(_matches);
};