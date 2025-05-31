const Tournament = require('../models/Tournament');

exports.getAllTournaments = async (req, res) =>{
    const torneos = await Tournament.find();
    res.json(tornneos);
};

exports.createTournament = async (req, res) =>{
    const nuevo = new Tournament(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
}