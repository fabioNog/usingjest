const UserRoutes = require('express').Router();

UserRoutes.get('/use',function(req, res) {
    res.send('Olá mundo');
  })


module.exports = UserRoutes;