let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let QuestionSchema = mongoose.Schema({
	question: {type:String, required:true, minlength: 10},
	description: {type:String, maxlength: 200},
  amount: [{type: Number, default: 0}],
	_answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps:true});
mongoose.model('Question', QuestionSchema);
