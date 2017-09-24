let mongoose = require('mongoose');
let User = mongoose.model("User");
let session = require('express-session');

module.exports = {

  register: (req, res) => {
    console.log('hit registerUser in controllers');
    console.log(req.body)

    let newUser = new User(req.body);
    newUser.save((err) => {
      if(err) {
        console.log("Error!", err);
        res.json(err);
      }
      else {
        console.log('Register Successful!');
        req.session.user_id = newUser._id;
        res.json(newUser);
      }
    })
  },

  currentUser: (req, res)=> {
    console.log("hit users.getCurrent");
		if(req.session.user_id == undefined){
			res.json({
				errors:
				{
					getCurrent: {message:"you are not logged in"}
				}
			});
		}
    else{
			User.findOne({_id: req.session.user_id}).exec((err,userFound)=>{
				if(err){
					console.log("Error!", err);
					res.json(false);
				}else{
					console.log("found user in session");
					res.json(userFound);
				}
			})
		}
  },


  logoff: (req, res)=> {
    console.log('Hit logoff controller')
    req.session.destroy();
    res.json(true);
  }

}
