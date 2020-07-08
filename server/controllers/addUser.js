const mongoose = require('mongoose');
const AddUser = mongoose.model('AddUser');
const jwt = require('jsonwebtoken');

const sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.addUser = function(req, res){
	AddUser.find({firstName: req.body.firstName})
		.exec()
		.then(us => {	
						const user = new AddUser({
							_id: new mongoose.Types.ObjectId(),
							firstName: req.body.firstName,
							lastName: req.body.lastName,
							userPhone: req.body.userPhone,
							favoriteId: false
						});
						user.save(function(err){
							if(err){
								return sendJsonResponse(res, 400, err);
							} else {
								return sendJsonResponse(res, 201, "Created");
							}
						});
					})
		.catch()
};

module.exports.editUser = function(req, res){
						const user = new AddUser({
							firstName: req.body.firstName,
							lastName: req.body.lastName,
							userPhone: req.body.userPhone,
							favoriteId: req.body.favoriteId
						});
						AddUser.findByIdAndUpdate(req.params._id, user)
						.exec()
						.then(result => {
							return sendJsonResponse(res, 200, result);
						})
						.catch(err =>{
							return sendJsonResponse(err, 500, {error: err})
						});
};
module.exports.getUsers = function(req, res){
	AddUser.find()
		.exec()
		.then(docs => {
				if(docs){
					return sendJsonResponse(res, 200, docs);
				} else {
					return sendJsonResponse(res, 404, {message: "Data dont found"});
				}
			}
		)
		.catch(err =>{
				return sendJsonResponse(err, 500, {error: err})
			}
		);	
};
module.exports.deleteUser = function(req, res){
	var id = req.params._id; 
	AddUser.remove({_id: id})
		.exec()
		.then(result => {
			return sendJsonResponse(res, 200, result);
		})
		.catch(err =>{
			return sendJsonResponse(err, 500, {error: err})
		});
};