const { Router } = require('express');
const { clientSignIn } = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/signIn', clientSignIn)

module.exports = {
    authRouter
}