const MainRouter = require('express').Router();

MainRouter.get('/',(req,res) =>{
    return res.status(200).json({
        status: 'ok',
        menssagem: 'tudo ok!'
    })
})


module.exports = MainRouter;