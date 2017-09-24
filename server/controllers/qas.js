let mongoose = require('mongoose');
let Question = mongoose.model("Question");
let Answer = mongoose.model("Answer");

module.exports = {
	createQ: (req, res)=> {
    let newQuestion = new Question(req.body);
    console.log('Creating Question..', newQuestion._id);
    console.log('Is there a user stored in session?', req.session.user_id);
    newQuestion._user = req.session.user_id;
    newQuestion.save((err)=> {
      if(err) {
        console.log("Error!", err);
        res.json(err);
      }
      else {
        console.log('Question Created Successfully!');
        res.json(newQuestion);
      }
    })
  },

  getAllQuestions: (req, res)=> {
    console.log('Hit getAllQuestions in Controllers');
    Question.find().exec((err, questionList)=> {
      if(err){
        console.log('error!', err);
        res.json(err);
      }
      else {
        console.log('List Found!');
        res.json(questionList);
      }
    })
  },

  grabThisQuestion: (req, res)=> {
    console.log('hit grabThisQuestion in controllers', req.body.q_id);
    Question.find({_id: req.body.q_id}).populate('_answers').exec((err, foundQuestion)=> {
      if(err) {
        console.log('Error!', err);
        res.json(err);
      }
      else {
        console.log('Found Question!', foundQuestion);
        res.json(foundQuestion);
      }
    })
  },

  createAnswer: (req, res)=> {
    console.log('hit createAnswer in Controller', req.body);
    console.log(req.body.q_id)
    Answer.create(req.body.answer, (err, answer) => {
      if(err) {
        console.log('Error!', err);
      }
      else {
        Question.update({_id: req.body.q_id}, {$push: {"_answers": answer}}, (err) => {
            if(err) {
              console.log("Error!", err);
              res.json(err);
            }
            else {
              res.json(true);
            }
          })
        }
      })
    },







}
