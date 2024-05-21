const Donador = require('../models/Donador');

exports.obtenerTodosLosDonadores = async (req, res) => {
  try {
    const donadores = await Donador.find();
    res.json(donadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearDonadores = async (req, res) => {
  try {
    const nuevoDonador = new Donador(req.body);
    await nuevoDonador.save();
    res.status(201).json(nuevoDonador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerDonadorPorId = async (req, res) => {
  try {
    const donador = await Donador.findById(req.params.id);
    if (!donador) {
      return res.status(404).json({ error: 'Beneficiario no encontrado' });
    }
    res.json(donador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarDonador = async (req, res) => {
  try {
    const donador = await Donador.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!donador) {
      return res.status(404).json({ error: 'Beneficiario no encontrado' });
    }
    res.json(donador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.actualizarEstadoDonador = async (req, res) => {
  try {
    const { id } = req.params;
    const donador = await Donador.findByIdAndUpdate(id, { activo: false }, { new: true });
    if (!donador) {
      return res.status(404).json({ error: 'Donador no encontrado' });
    }
    res.json(donador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
