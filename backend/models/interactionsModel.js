const db = require('../db/index');

const getAllInteraction = async () => {
    const [rows] = await db.execute('SELECT * FROM tabla_relaciones');
    return rows;
};

const getInteractionById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM tabla_relaciones WHERE id = ?', [id]);
    return rows[0];
};


const updateInteraction = async (id, newData) => {
    const { follower_id, followed_id } = newData;
    const [result] = await db.execute(
        'UPDATE tabla_relaciones SET follower_id = ?,followed_id = ?  WHERE id = ?',
        [follower_id ,followed_id , id]
    );

    return result.affectedRows > 0;
};

const deleteInteraction = async (id) => {
    const [result] = await db.execute('DELETE FROM tabla_relaciones WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

module.exports = {
    getAllInteraction,
    getInteractionById,
    updateInteraction,
    deleteInteraction
};