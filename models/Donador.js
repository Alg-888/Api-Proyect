const mongoose = require('mongoose');
const { Schema } = mongoose;

const donadorSchema = new Schema({
  identificacion: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  tipoDonador: {
    type: String,
    required: true
  },
  tipoDocumen: {
    type: String,
    required: true
  },  
  Documento: {
    type: String,
    required: true
  },
  telefono: {
    type: Number
  },
  direccion: {
    type: String,
    required: true
  },
  correoElectronico: {
    type: String,
    required: true,
    unique: true
  },
  activo: {
    type: Boolean,
    default: true 
  }
});

const Donador = mongoose.model('Donador', DonadorSchema);

module.exports = Donador;
