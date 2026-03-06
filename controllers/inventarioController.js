const Inventario = require('../models/Inventario');

class InventarioController {
    static async listar(req, res) {
        try {
            const items = await Inventario.obtenerTodo();
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async guardar(req, res) {
        try {
            const id = await Inventario.crear(req.body);
            res.status(201).json({ mensaje: "Insumo registrado", id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = InventarioController;