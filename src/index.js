const express = require('express');
const app = express();
const rutasCuentas = require('./rutas/rutas_cuentas');

const PORT = 3130;

app.use(express.json());

app.use('/cuentas', rutasCuentas);
//app.use('/cuenta', rutasCuentas);

app.listen (PORT, () => {
  console.log('Servidor BE corriendo en http://localhost:${PORT}');
});