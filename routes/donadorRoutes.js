const express = require('express');
const router = express.Router();
const donadorController = require('../controllers/donadorController');

router.get('/', donadorController.obtenerTodosLosDonadores);
router.post('/', donadorController.crearDonadores);
router.get('/:id', donadorController.obtenerDonadorPorId);
router.put('/:id', donadorController.actualizarDonador);
router.put('/inactivar/:id', donadorController.actualizarEstadoDonador); 

module.exports = router;
