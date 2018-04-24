const Router = require('express').Router()
const controller = require('./controller')

Router.get('/', controller.index)

module.exports = Router
