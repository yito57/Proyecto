const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', require('./routes/auth'));
app.use('/perfil', require('./routes/perfil'));
app.use('/usuario', require('./routes/usuario'));
app.use('/persona', require('./routes/persona'));

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});