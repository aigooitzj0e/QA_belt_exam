let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AnswerSchema = mongoose.Schema({
	answer: {type:String, required:true, minlength: 5},
	description: {type:String, maxlength: 200},
  likes: {type: Number, default: 0},
	// _user: {type: Schema.Types.ObjectId, ref: 'User'},
  // _question:{type: Schema.Types.ObjectId, ref: 'Question'},
}, {timestamps:true});
mongoose.model('Answer', AnswerSchema);
