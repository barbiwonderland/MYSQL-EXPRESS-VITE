
const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetControler');

router.get('/',tweetController.getAllTweets);
router.post('/',tweetController.createTweetController);
router.get('/:id', tweetController.getTweetById);
router.put('/:id', tweetController.updateTweet);
router.delete('/:id', tweetController.deleteTweet);

module.exports = router;