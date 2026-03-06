const ValorReferencia = require('../models/ValorReferencia');

class ValorReferenciaController {
    static async listar(req, res) {
        try {
            const valores = await ValorReferencia.obtenerTodo();
            res.json(valores);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async guardar(req, res) {
        try {
            const id = await ValorReferencia.crear(req.body);
            res.status(201).json({ mensaje: "Valor de referencia guardado", id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ValorReferenciaController;