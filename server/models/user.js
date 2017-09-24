let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let Schema = mongoose.Schema;

let UserSchema = mongoose.Schema({
	name: {type:String, required:true},
	questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
});


mongoose.model('User', UserSchema);
