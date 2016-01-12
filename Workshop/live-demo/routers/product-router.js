// routers/product-router.js
'use strict';

let express = require('express');

let router = new express.Router();

let mongoose = require('mongoose');
let Product = mongoose.model('Product');

let controller = require('../controllers/product-controller')(Product);

router.get('/', controller.get);

module.exports = function(app) {
  app.use('/products', router);


};