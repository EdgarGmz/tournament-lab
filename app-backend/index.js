const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
// Para leer JSON en las peticiones 
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/', (rep, res) =>{
    res.send('API Tournament Lab funcionando');
});

app.listen(PORT, () =>{
    console.log (`Servidor corriendo en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})