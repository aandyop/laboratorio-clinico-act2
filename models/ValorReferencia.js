const db = require('../config/db');

class ValorReferencia {
    static async obtenerTodo() {
        const [rows] = await db.query('SELECT * FROM valores_referencia ORDER BY nombre_examen ASC');
        return rows;
    }

    static async crear(datos) {
        const { nombre_examen, valor_minimo, valor_maximo, unidad } = datos;
        const [result] = await db.query(
            'INSERT INTO valores_referencia (nombre_examen, valor_minimo, valor_maximo, unidad) VALUES (?, ?, ?, ?)',
            [nombre_examen, valor_minimo, valor_maximo, unidad]
        );
        return result.insertId;
    }
}

module.exports = ValorReferencia;