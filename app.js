require('dotenv').config();
const express = require('express');
const connectDB = require('./Config/database');
const beneficiarioRoutes = require('./routes/beneficiarioRoutes');
const ayudanteRoutes = require('./routes/ayudanteRoutes');
const donacionRoutes = require('./routes/donacionRoutes');
const donadorRoutes = require('./routes/donadorRoutes');
const cors = require('cors');


const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/beneficiarios', beneficiarioRoutes);
app.use('/ayudantes', ayudanteRoutes);
app.use('/donadores', donadorRoutes);
app.use('/donaciones', donacionRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error de conexión a la base de datos:', error);
});
