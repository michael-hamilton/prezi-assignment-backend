var prezis = require(__dirname+'/prezis.json');

//Send prezis back to client.  Sends prezis that match search query, or all prezis if no query is set.
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