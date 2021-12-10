const express = require ('express');
const AppRouter = express.Router();
const {AppController} = require('../controllers/appController');

AppRouter
    .get ('/notes', AppController.getIndex);

AppRouter
    .post ('/notes', AppController.add);

module.exports={AppRouter};