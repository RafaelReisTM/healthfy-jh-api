const express = require('express');

const entryRouter = express.Router();

const entryController = require('../controllers/data.controller');

// const { validationJoi, validationCustomer } = require('../middlewares');

// router.get('/entries', validationCustomer, entryController.getAll);

entryRouter.get('/entries', entryController.getAll);

module.exports = entryRouter;