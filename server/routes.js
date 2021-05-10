const express = require('express');
const router = express.Router();
const userController = require('./controller/users');
const showController = require('./controller/shows');

router.post('/user/signup', userController.signup);
router.post('/user/login', userController.login);
router.get('/tmdb/:data', showController.fetchData);

module.exports = router;
