let QAs = require('./../controllers/qas');
let Users = require('./../controllers/users');
let path = require('path');

module.exports = (app)=>{
	//Users
	app.post('/api/register', Users.register)
	app.get('/api/current', Users.currentUser)
	app.get('/api/logoff', Users.logoff)

	//QAs
	app.post('/api/createQ', QAs.createQ)
	app.get('/api/getAllQuestions', QAs.getAllQuestions)
	app.post('/api/grabThisQuestion', QAs.grabThisQuestion)
	app.post('/api/newAnswer', QAs.createAnswer)



	app.all('*', (req, res) => {
		res.sendFile(path.resolve('./public/dist/index.html'));
	})
}
