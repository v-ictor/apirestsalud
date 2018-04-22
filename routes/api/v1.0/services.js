var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/imc', function (req, res, next) {
  var imc = Number(req.body.masa) / Math.pow(Number(req.body.altura), 2);
  if (imc < 16) {
    res.send({
      "msn" : "Delgadez severa",
      "imc" : imc
    });
  }else if (imc > 16 && imc < 16.99) {
    res.send({
      "msn" : "Delgadez moderada",
      "imc" : imc
    });
  }else if (imc > 17 && imc < 18.49) {
    res.send({
      "msn" : "Delgadez leve",
      "imc" : imc
    });
  }else if (imc >= 18.5 && imc <= 24.99) {
    res.send({
      "msn" : "Normal",
      "imc" : imc
    });
  }else if (imc >= 25 && imc <= 29.99) {
    res.send({
      "msn" : "Sobre peso",
      "imc" : imc
    });
  }else if (icm >= 30 && icm <= 39.99) {
    res.send({
      "msn" : "Obesidad",
      "imc" : imc
    });
  }else if (imc >= 40) {
    res.send({
      "msn" : "Obesidad morbida",
      "imc" : imc
    });
  }else {
    res.send({
      "msn" : "Error en los datos",
      "imc" : imc
    });
  }
  //res.render('index', { title: 'Express' });
});

module.exports = router;
