var prezis = require(__dirname+'/prezis.json');

//Send all the prezis in the JSON file
module.exports.getPrezis = function(req, res, next) {
    if(req.query.title) {
        var _matches = [];
        for(var i = 0; i < prezis.length; i++) {
            if(prezis[i].title.indexOf(req.query.title) != -1) {
                _matches.push(prezis[i]);
            }
        }
        res.json({prezi: _matches});
    }
    else {
        res.json({prezi: prezis});
    }
};