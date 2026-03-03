const express = require('express');
const router = express.Router();
const PacienteController = require('../controllers/pacienteController');

// Endpoints
router.get('/', PacienteController.listar);
router.post('/', PacienteController.guardar);
router.put('/:id', PacienteController.editar);
router.delete('/:id', PacienteController.borrar);

module.exports = router;