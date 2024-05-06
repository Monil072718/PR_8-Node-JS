const { Router } = require('express');
const { getSubCat, subcreate , update} = require('../controllers/subcategory.controller');

const subCatRouter = Router();

subCatRouter.post('/', subcreate);
subCatRouter.get('/', getSubCat);
subCatRouter.patch('/update/:id', update);

module.exports = subCatRouter;