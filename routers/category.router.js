const { Router } = require('express');
const { create, getCat } = require('../controllers/category.controller');
// const { create, update, getCat } = require('../controllers/category.controller');


const catRouter = Router();

catRouter.post('/', create);
catRouter.get('/', getCat);


module.exports = catRouter;