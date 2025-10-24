const express = require ('express');
const router = express.Router();
const controladorCuentas = require ('../controladores/controladores_cuentas');

router.get('/:id', controladorCuentas.getCuentaById);

module.exports = router;