const app = require('../../api')

const MainRouter = require('./MainRouter');

module.exports = (app) => {
    app.use(MainRouter);
}