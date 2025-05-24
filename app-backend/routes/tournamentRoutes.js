const express = require('express');
const  router = express.Router();
const controller = require('../controllers/tournamentController');

router.get('/', controller.getAllTournaments);
router.post('/', controller.createTournament);  

module.exports = router;