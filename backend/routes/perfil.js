const express = require('express');
const router = express.Router();
const db = require('../db');

// Crear perfil
router.post('/', (req, res) => {
    const { nombre } = req.body;
    db.query('INSERT INTO perfil (nombre) VALUES (?)', [nombre], (err) => {
        if (err) return res.status(500).json({ mensaje: 'Error al crear' });
        res.json({ mensaje: 'Perfil creado correctamente' });
    });
});

// Obtener perfiles activos
router.get('/', (req, res) => {
    db.query('SELECT * FROM perfil WHERE estado = 1', (err, rows) => {
        if (err) return res.status(500).json({ mensaje: 'Error al obtener perfiles' });
        res.json(rows);
    });
});

// Editar perfil
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    db.query('UPDATE perfil SET nombre = ? WHERE id = ?', [nombre, id], (err) => {
        if (err) return res.status(500).json({ mensaje: 'Error al editar' });
        res.json({ mensaje: 'Perfil actualizado' });
    });
});

// Inhabilitar (borrado lógico)
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('UPDATE perfil SET estado = 0 WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ mensaje: 'Error al eliminar' });
        res.json({ mensaje: 'Perfil inhabilitado' });
    });
});

module.exports = router;
