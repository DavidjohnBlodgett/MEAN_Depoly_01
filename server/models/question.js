var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    content: { type: String },
    answer: { type: String },
    fakeAnswerOne: { type: String },
    fakeAnswerTwo: { type: String }
},{ timestamps: true });

// third param overrides mongo default collection names...
var User = mongoose.model('Question', UserSchema, 'questions');
