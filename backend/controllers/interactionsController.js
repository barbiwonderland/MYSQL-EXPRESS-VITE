
const interactionModel = require('../models/interactionsModel');


const getAllInteractions = async (req, res) => {
    try {
        const Interactions = await interactionModel.getAllInteraction();
        res.json(Interactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getInteractionById = async (req, res) => {
    try {
        const InteractionId = req.params.id;
        const Interaction = await interactionModel.getInteractionById(InteractionId);

        if (!Interaction) {
            return res.status(404).json({ error: 'Interaction no encontrado' });
        }

        res.json(Interaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const updateInteraction = async (req, res) => {
    try {
        const InteractionId = req.params.id;
        const newData = req.body;

        const updated = await interactionModel.updateInteraction(InteractionId, newData);

        if (!updated) {
            return res.status(404).json({ error: 'Interaction no encontrado' });
        }

        res.json({ message: 'Interaction actualizado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const deleteInteraction = async (req, res) => {
    try {
        const InteractionId = req.params.id;

        const deleted = await interactionModel.deleteInteraction(InteractionId);

        if (!deleted) {
            return res.status(404).json({ error: 'Interaction no encontrado' });
        }

        res.json({ message: 'Interaction eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    getAllInteractions,
    getInteractionById,
    updateInteraction,
    deleteInteraction
};