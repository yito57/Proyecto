const express = require('express');
const router = express.Router();

// Ruta para obtener todas las personas
router.get('/', (req, res) => {
  res.send('Obteniendo todas las personas');
});

// Ruta para obtener una persona por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Obteniendo persona con ID: ${id}`);
});

// Ruta para crear una nueva persona
router.post('/', (req, res) => {
  const nuevaPersona = req.body;
  res.send('Creando nueva persona: ' + JSON.stringify(nuevaPersona));
});

// Ruta para actualizar una persona por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const actualizacion = req.body;
  res.send(`Actualizando persona con ID: ${id} con datos: ${JSON.stringify(actualizacion)}`);
});

// Ruta para eliminar una persona por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Eliminando persona con ID: ${id}`);
});

module.exports = router;