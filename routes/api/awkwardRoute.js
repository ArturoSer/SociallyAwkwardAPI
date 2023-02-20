const router = require('express').Router();
const {getAwkward, getOneAwkward, createAwkward, updateAwkward, deleteAwkward, addReaction, removeReaction} = require('../../controllers/awkwardController');

router.route('/')
.get(getAwkward)
.post(createAwkward);

router.route('/:socialId')
.get(getOneAwkward)
.put(updateAwkward)
.delete(deleteAwkward);

router.route('/:awkwardId/reactions')
.post(addReaction);

router.route('/:awkwardId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;