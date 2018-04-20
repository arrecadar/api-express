const Router = require('express').Router()
const controller = require('./controller')
const request = require('./request')

Router.get('/', controller.index)
Router.get('/:id', controller.show)
Router.post('/', request, controller.store)

module.exports = Router
