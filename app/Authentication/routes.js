const Router = require('express').Router()
const controller = require('./controller')

Router.post('/login', controller.login)

module.exports = Router
