const sayurRoutes = require('express').Router();
const sayurcontroller = require('../controller/sayurcontroller');

sayurRoutes.get('/',sayurcontroller.getAll);
sayurRoutes.post('/',sayurcontroller.postsayur);

module.exports = sayurRoutes
