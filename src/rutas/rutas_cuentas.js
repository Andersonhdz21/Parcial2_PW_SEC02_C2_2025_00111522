const express = require ('express');
const router = express.Router();
const controladorCuentas = require ('../controladores/controladores_cuentas');

router.get('/:id', controladorCuentas.getCuentaById); //id

router.get ('/', controladorCuentas.getCuentaByQuery); //querys con parametros

router.get('/extra/balance', controladorCuentas.getCuentasBalance); //balance

module.exports = router;