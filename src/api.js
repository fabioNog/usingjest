const express = require('express')

class App{
    constructor(){
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    database(){

    }

    middlewares(){
        this.express.use(express.json)
    }


    routes(){

    }
}

module.exports = new App().express;