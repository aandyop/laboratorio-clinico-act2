const express = require('express');
const router = express.Router();
const InventarioController = require('../controllers/inventarioController');

router.get('/', InventarioController.listar);
router.post('/', InventarioController.guardar);

module.exports = router;