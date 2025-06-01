// Servidor principal Express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const perfilRoutes = require('./routes/perfil');
app.use('/perfil', perfilRoutes);

const usuarioRoutes = require('./routes/usuario');
app.use('/usuario', usuarioRoutes);

const personaRoutes = require('./routes/persona');
app.use('/persona', personaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
