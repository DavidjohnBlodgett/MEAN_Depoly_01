var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = {
    create: function(req, res, next) {
        var user = new User(req.body);
        user.save(function(err) {
            if(err){
                console.log('error writting to the db');
                console.log(err);
            }else {
                res.json(true);
            }

        });
    },
    createGame: function(req, res, next) {
        console.log('Im inside createGame()...');
        User.findOne({ _id: req.params.id }, function(err, user) {
                var game = new Game(req.body);
                game._user = user._id;
                game.save(function(err) {
                    user.games.push(game);
                    user.save(function(err) {
                        if(err){
                            console.log('error writting to the db');
                            console.log(err);
                        }else {
                            res.json(true);
                        }
                    });
                });
        });

    },
    readAll: function(req, res, next) {
        User.find({},function(err, users) {
            res.json(users);
        });
    },
    update: function() {

        // TODO: no update...

    },
    delete: function(req, res, next) {
        // NOTE: this may need to be using req.body.id...
        User.deleteOne({ _id: req.params.id },function(err) {
            if(err){
                console.log('something went wrong with the delete...');
                res.json(false);
            }else {
                res.json(true);
            }
        });
    },

}
