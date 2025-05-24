const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:true,
    },

    tipo:{
        type: String,
        required:true,
    },

    fecha_inicio:{
        type: Date,
        required:true,
    },

    fecha_final:{
        type: Date,
        required:true,
    },

    participantes:{
        type: [String],
        default:[]
    },

    estado:{
        type: String,
        enum: ['en curso', 'cancelado', 'finalizado'],
        default: 'en curso'
    }
});

module.exports = mongoose.model('Tournament', tournamentSchema);