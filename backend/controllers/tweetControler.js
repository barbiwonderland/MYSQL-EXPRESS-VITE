// controllers/TweetController.js

const tweetModel = require('../models/tweetModel');

const createTweetController = async (req, res, next) => {
    const { content, user_id } = req.body;

    try {
        if (!content || !user_id) {
            return res.status(400).json({ error: 'Content and user_id are required' });
        }

        const newTweet = await tweetModel.createTweet({ content, user_id });
        res.status(201).json(newTweet);
    } catch (error) {
        next(error);
    }
};

const getAllTweets = async (req, res) => {
    try {
        const tweets = await tweetModel.getAllTweets();
        res.json(tweets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


const getTweetById = async (req, res) => {
    try {
        const TweetId = req.params.id;
        const Tweet = await tweetModel.getTweetById(TweetId);

        if (!Tweet) {
            return res.status(404).json({ error: 'Tweet no encontrado' });
        }

        res.json(Tweet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const updateTweet = async (req, res) => {
    try {
        const TweetId = req.params.id;
        const newData = req.body;

        const updated = await tweetModel.updateTweet(TweetId, newData);

        if (!updated) {
            return res.status(404).json({ error: 'Tweet no encontrado' });
        }

        res.json({ message: 'Tweet actualizado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const deleteTweet = async (req, res) => {
    try {
        const TweetId = req.params.id;

        const deleted = await tweetModel.deleteTweet(TweetId);

        if (!deleted) {
            return res.status(404).json({ error: 'Tweet no encontrado' });
        }

        res.json({ message: 'Tweet eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    createTweetController,
    getAllTweets,
    getTweetById,
    updateTweet,
    deleteTweet
};