const express = require('express');
const router = express.Router();
const userController = require('./controller/users');
const showController = require('./controller/shows');

router.post('/user/signup', userController.signup);
router.post('/user/login', userController.login);
router.get('/tmdb/:data', showController.fetchData);
router.get('/tmdb/trailer/:data/:type', showController.fetchTrailer);
router.get('/tmdb/:type/:id', showController.fetchShow);

module.exports = router;
