const db = require('../db/index');

const createTweet = async (tweetData) => {
    const { content, user_id } = tweetData;

    const [result] = await db.execute(
        'INSERT INTO tweets (content, user_id) VALUES (?, ?)',
        [content, user_id]
    );

    return { id: result.insertId, ...tweetData };
};

const getAllTweets = async () => {
    const [rows] = await db.execute('SELECT * FROM tweets');
    return rows;
};

const getTweetById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM tweets WHERE id = ?', [id]);
    return rows[0];
};


const updateTweet = async (id, newData) => {
    const { content, user_id } = newData;
console.log(content)
    const [result] = await db.execute(
        'UPDATE tweets SET content = ? WHERE id = ?',
        [content, id]
    );

    return result.affectedRows > 0;
};

const deleteTweet = async (id) => {
    const [result] = await db.execute('DELETE FROM tweets WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

module.exports = {
    createTweet,
    getAllTweets,
    getTweetById,
    updateTweet,
    deleteTweet
};