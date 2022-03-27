var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/promo*', function (req, res) {
  res.send('Respuesta al patrón promo*');
});
app.get('/pro*ar', function (req, res) {
  res.send('Respuesta al patrón pro*ar');
});

module.exports = router;
