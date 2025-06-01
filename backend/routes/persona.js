const express = require('express');
const router = express.Router();
const db = require('../db');

// Crear persona
router.post('/', (req, res) => {
    const { nombre, correo } = req.body;
    db.query('INSERT INTO persona (nombre, correo) VALUES (?, ?)', [nombre, correo], (err) => {
        if (err) return res.status(500).json({ mensaje: 'Error al crear persona' });
        res.json({ mensaje: 'Persona creada' });
    });
});

// Obtener personas activas
router.get('/', (req, res) => {
    db.query('SELECT * FROM persona WHERE estado = 1', (err, rows) => {
        if (err) return res.status(500).json({ mensaje: 'Error al obtener personas' });
        res.json(rows);
    });
});

// Editar persona
router.put('/:id', (req, res) => {
    const { nombre, correo } = req.body;
    db.query('UPDATE persona SET nombre = ?, correo = ? WHERE id = ?', [nombre, correo, req.params.id], (err) => {
        if (err) return res.status(500).json({ mensaje: 'Error al editar persona' });
        res.json({ mensaje: 'Persona actualizada' });
    });
});

// Eliminar persona (borrado lógico)
router.delete('/:id', (req, res) => {
    db.query('UPDATE persona SET estado = 0 WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ mensaje: 'Error al eliminar persona' });
        res.json({ mensaje: 'Persona eliminada' });
    });
});

module.exports = router;
