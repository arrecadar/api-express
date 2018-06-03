const Router = require('express').Router()
const { authorizeWithJwt } = require('../Authentication/middleware')

const controller = require('./controller')
const request = require('./request')

Router.get('/', authorizeWithJwt, controller.index)
Router.get('/:id', controller.show)
Router.put('/:id', controller.save)
Router.post('/', request, controller.store)
Router.delete('/:id', controller.remove)

module.exports = Router
