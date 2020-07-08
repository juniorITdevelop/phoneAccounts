const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/addUser');


// users
router.post('/addUser', ctrlUsers.addUser);
router.get('/addUser', ctrlUsers.getUsers);
router.patch('/editUser/:_id', ctrlUsers.editUser);
router.delete('/deleteUser/:_id', ctrlUsers.deleteUser);

module.exports = router;
