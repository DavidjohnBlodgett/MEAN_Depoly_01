var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    score: { type: Number },
    percent: { type: Number }
},{ timestamps: true });

// third param overrides mongo default collection names...
var User = mongoose.model('Game', UserSchema, 'games');
