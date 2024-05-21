require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./Config/database');
const ayudanteRoutes = require('./routes/ayudanteRoutes');
const donacionRoutes = require('./routes/donacionRoutes');
const donadorRoutes = require('./routes/donadorRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

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
