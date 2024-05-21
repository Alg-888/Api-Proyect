const mongoose = require('mongoose');

const donacionSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  donacion: {
    type: String,
    required: true
  },
  donador: {
    type: String,
    required: true
  }
});

const Donacion= mongoose.model('Donacion', donacionSchema);

module.exports = Donacion;
