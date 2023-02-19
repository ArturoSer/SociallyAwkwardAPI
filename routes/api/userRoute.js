const router = require('express').Router();
const { getUser, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controller/userController');

router.route('/')
.get(getUsers)
.post(createUser);

router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends/:friendsId')
.post(addFriend)
.delete(removeFriend);

module.exports = router; 