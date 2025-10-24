const express = require ('express');
const router = express.Router();
const controladorCuentas = require ('../controladores/controladores_cuentas');

router.get('/', controladorCuentas.getCuentaByQuery);

router.get('/:id', controladorCuentas.getCuentaById);

router.get('/extra/balance', controladorCuentas.getCuentasBalance);

module.exports = router;