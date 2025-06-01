const express = require('express');
const router = express.Router();
const db = require('../db');

// Crear usuario
router.post('/', (req, res) => {
    const { usuario, contrasena, id_persona, id_perfil } = req.body;
    const sql = `INSERT INTO usuario (usuario, contrasena, id_persona, id_perfil) VALUES (?, ?, ?, ?)`;
    db.query(sql, [usuario, contrasena, id_persona, id_perfil], (err) => {
        if (err) return res.status(500).json({ mensaje: 'Error al crear usuario' });
        res.json({ mensaje: 'Usuario creado' });
    });
});

// Listar usuarios activos
router.get('/', (req, res) => {
    const sql = `
        SELECT u.id, u.usuario, u.contrasena, p.nombre AS perfil, per.nombre AS persona 
        FROM usuario u
        JOIN perfil p ON u.id_perfil = p.id
        JOIN persona per ON u.id_persona = per.id
        WHERE u.estado = 1
    `;
    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ mensaje: 'Error al obtener usuarios' });
        res.json(rows);
    });
});

// Editar usuario
router.put('/:id', (req, res) => {
    const { usuario, contrasena, id_persona, id_perfil } = req.body;
    db.query(
        `UPDATE usuario SET usuario = ?, contrasena = ?, id_persona = ?, id_perfil = ? WHERE id = ?`,
        [usuario, contrasena, id_persona, id_perfil, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ mensaje: 'Error al editar' });
            res.json({ mensaje: 'Usuario actualizado' });
        }
    );
});

// Inhabilitar usuario
router.delete('/:id', (req, res) => {
    db.query('UPDATE usuario SET estado = 0 WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ mensaje: 'Error al eliminar' });
        res.json({ mensaje: 'Usuario eliminado' });
    });
});

module.exports = router;
