const express = require('express');
const router = express.Router();
const ValorReferenciaController = require('../controllers/valorReferenciaController');

router.get('/', ValorReferenciaController.listar);
router.post('/', ValorReferenciaController.guardar);

module.exports = router;