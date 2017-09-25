var mongoose = require('mongoose');
var Question = mongoose.model('Question');


module.exports = {
    create: function(req, res, next) {
        var question = new Question(req.body);
        question.save(function(err) {
            if(err){
                console.log('error writting to the db');
                console.log(err);
            }else {
                res.json(true);
            }

        });
    },
    readAll: function(req, res, next) {
        Question.find({},function(err, questions) {

            // TODO: may want to handle the output of only 3 random questions here...

            res.json(questions);
        });
    }
    // update: function() {
    //
    //     // TODO: no update...
    //
    // },
    // delete: function(req, res, next) {
    //     // NOTE: this may need to be using req.body.id...
    //     Question.deleteOne({ _id: req.params.id },function(err) {
    //         if(err){
    //             console.log('something went wrong with the delete...');
    //             res.json(false);
    //         }else {
    //             res.json(true);
    //         }
    //     });
    // },

}
