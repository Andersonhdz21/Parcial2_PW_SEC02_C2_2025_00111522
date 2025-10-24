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

exports.getCuentaByQuery = (req, res) => {
  const { queryParam } = req.query;

  if (!queryParam || String(queryParam).trim() === '') {
    return res.status(400).json({
      finded: false,
      message: 'Debe enviar ?queryParam=valor (id, name o gender)'
    });
  }

  const q = String(queryParam).trim().toLowerCase();
  const byId = cuentas.find(c => String(c._id).toLowerCase() === q);
  if (byId) {
    return res.json({ finded: true, account: byId });
  }

  const byName = cuentas.filter(c => String(c.name || '').toLowerCase().includes(q));
  if (byName.length === 1) {
    return res.json({ finded: true, account: byName[0] });
  }
  if (byName.length > 1) {
    return res.json({ finded: true, data: byName });
  }

  if (q === 'male' || q === 'female') {
    const byGender = cuentas.filter(c => String(c.gender || '').toLowerCase() === q);
    return res.json({ finded: byGender.length > 0, data: byGender });
  }

  return res.json({ finded: false, account: null });
};

exports.getCuentasBalance = (req, res) => {
  const activas = cuentas.filter(c => c.isActive === true);
  // parsear "$1,234.56" => 1234.56
  const parseMoney = (s) => {
    if (typeof s !== 'string') return Number(s || 0);
    return Number(s.replace(/\$/g, '').replace(/,/g, '')) || 0;
  };
  const accountBalance = activas.reduce((acc, c) => acc + parseMoney(c.balance), 0);
  return res.json({ status: activas.length > 0, accountBalance });
};
