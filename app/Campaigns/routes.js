const Router = require('express').Router()
const controller = require('./controller')
const request = require('./request')

Router.get('/', controller.index)
Router.post('/', request, controller.store)
Router.get('/:id', controller.show)

module.exports = Router
