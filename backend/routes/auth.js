const express = require('express');
const router = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');

// ✅ LOGIN FUNCIONAL
router.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        return res.status(400).json({ mensaje: 'Faltan campos' });
    }

    const query = `SELECT * FROM usuario WHERE usuario = ? AND contrasena = ? AND estado = 1`;

    db.query(query, [usuario, contrasena], (err, results) => {
        if (err) {
            console.error('Error en BD:', err);
            return res.status(500).json({ mensaje: 'Error en el servidor' });
        }

        if (results.length === 0) {
            return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
        }

        res.json({ mensaje: 'Acceso permitido' });
    });
});

// ✅ RECUPERACIÓN DE CONTRASEÑA
router.post('/recuperar', async (req, res) => {
    const { correo } = req.body;

    const sql = `
        SELECT u.usuario, u.contrasena FROM usuario u
        JOIN persona p ON u.id_persona = p.id
        WHERE p.correo = ? AND u.estado = 1
    `;

    db.query(sql, [correo], async (err, results) => {
        if (err) {
            console.error('Error al recuperar:', err);
            return res.status(500).json({ mensaje: 'Error en el servidor' });
        }

        if (results.length === 0) {
            return res.status(404).json({ mensaje: 'El usuario no se encuentra registrado.' });
        }

        const { usuario, contrasena } = results[0];

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'TU_CORREO@gmail.com',
                pass: 'CONTRASEÑA_DE_APLICACIÓN'
            }
        });

        try {
            await transporter.sendMail({
                from: 'TU_CORREO@gmail.com',
                to: correo,
                subject: 'Recuperación de acceso',
                text: `Tu usuario es: ${usuario}\nTu contraseña es: ${contrasena}`
            });

            res.json({ mensaje: 'Se ha enviado tu usuario y contraseña al correo registrado' });
        } catch (error) {
            console.error('Error al enviar correo:', error);
            res.status(500).json({ mensaje: 'No se pudo enviar el correo.' });
        }
    });
});

module.exports = router;
