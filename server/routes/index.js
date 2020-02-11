const express = require('express');
const UserController = require('../controllers/UserController');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.get('/welcome', (req, res, next) => {
    res.status(200).send({ welcomeMessage: 'Step 1 (completed)' });
});

router.use('/user', userRoutes);

module.exports = router;
