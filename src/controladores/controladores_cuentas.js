const cuentas = require ('../datos/cuentas');

exports.getAllCuentas = (req, res) => {
  res.json({
    count: cuentas.lenght,
    data: cuentas
  });
};

exports.getCuentaById = (req, res) => {
  const id = req.params.id;
  const cuenta = cuentas.find(c => c._id === id);

  if (cuenta) {
    res.json({ finded: true, account: cuenta });
  } else {
    res.json({ finded: false });
  }
};