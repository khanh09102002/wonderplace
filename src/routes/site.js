const express = require("express");
const route = express.Router();
const newContrller = require('../app/controllers/siteController');
const index = require('../../src/app/controllers/homeController')

route.get("/about.html",newContrller.index);
route.get('/testVoice',newContrller.voice)
route.get('/',index.index)

module.exports = route;
