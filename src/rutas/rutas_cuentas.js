const express = require ('express');
const router = express.Router();
const controladorCuentas = require ('../controladores/controladores_cuentas');

router.get('/:id', controladorCuentas.getCuentaById); //id

router.get ('/', controladorCuentas.getCuentaByQuery); //querys con parametros

module.exports = router;