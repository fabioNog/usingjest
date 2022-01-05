const api = require('../../api')

const MainRouter = require('./MainRoutes');
const UserRoutes = require('./UserRoutes');

module.exports = (api) => {
    api.use(MainRouter);
    api.use(UserRoutes);
}