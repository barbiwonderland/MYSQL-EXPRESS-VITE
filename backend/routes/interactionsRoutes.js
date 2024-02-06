
const express = require('express');
const router = express.Router();
const InteractionController = require('../controllers/interactionsController');

router.get('/',InteractionController.getAllInteractions);
router.post('/',InteractionController.createInteractionController);
router.get('/:id', InteractionController.getInteractionById);
router.put('/:id', InteractionController.updateInteraction);
router.delete('/:id', InteractionController.deleteInteraction);

module.exports = router;