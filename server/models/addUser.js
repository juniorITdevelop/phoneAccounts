var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	firstName: String,
	lastName: String,
	userPhone: String,
	favoriteId: Boolean
});

mongoose.model('AddUser', userSchema, 'addUser');




// db.users.save({
// 	name: "ivan",
// 	surname: "biruk",
// "phone": "0979322960"
// })
