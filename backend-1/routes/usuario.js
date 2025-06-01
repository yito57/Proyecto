const express = require('express');
const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', (req, res) => {
  // Lógica para obtener todos los usuarios
  res.send('Obteniendo todos los usuarios');
});

// Ruta para obtener un usuario por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Lógica para obtener un usuario por ID
  res.send(`Obteniendo usuario con ID: ${id}`);
});

// Ruta para crear un nuevo usuario
router.post('/', (req, res) => {
  const nuevoUsuario = req.body;
  // Lógica para crear un nuevo usuario
  res.send('Usuario creado');
});

// Ruta para actualizar un usuario por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const usuarioActualizado = req.body;
  // Lógica para actualizar un usuario por ID
  res.send(`Usuario con ID: ${id} actualizado`);
});

// Ruta para eliminar un usuario por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Lógica para eliminar un usuario por ID
  res.send(`Usuario con ID: ${id} eliminado`);
});

module.exports = router;