var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique:true,
    },
    games: [{type: Schema.Types.ObjectId, ref: 'Game'}]
},{ timestamps: true });

// third param overrides mongo default collection names...
var User = mongoose.model('User', UserSchema, 'users');
