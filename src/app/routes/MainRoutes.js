const MainRoutes = require('express').Router();

MainRoutes.get('/',function(req, res) {
  console.log('entrei');
    res.send('Olá mundo');
  })


module.exports = MainRoutes;