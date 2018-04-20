const Router = require('express').Router()
const controller = require('./controller')
const request = require('./request')

Router.get('/', controller.index)
Router.get('/:id', controller.show)
Router.put('/:id', controller.save)
Router.post('/', request, controller.store)
Router.delete('/:id', controller.remove)

module.exports = Router
