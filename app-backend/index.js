const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
// Para leer JSON en las peticiones 
app.use(express.json());

// mongoose
const mongoose = require('mongoose');
const tournamentRoutes = require('./routes/tournamentRoutes')

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) =>{
    res.send('API Tournament Lab funcionando');
});

app.listen(PORT, () =>{
    console.log (`Servidor corriendo en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conentado a la base de datos'))
    .catch(err => console.log(err));

app.use('/api/tournaments', tournamentRoutes)