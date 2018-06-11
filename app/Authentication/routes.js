const Router = require('express').Router()
const controller = require('./controller')

Router.post('/login', controller.login)
Router.get('/confirmation', controller.confirmation)

module.exports = Router
