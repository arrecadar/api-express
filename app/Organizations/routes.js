const Router = require('express').Router()
const { authorizeWithJwt } = require('../Authentication/middleware')

const controller = require('./controller')
const request = require('./request')

Router.get('/', controller.index)
Router.get('/:id', controller.show)
Router.put('/:id', authorizeWithJwt, controller.save)
Router.post('/', authorizeWithJwt, request, controller.store)
Router.delete('/:id', authorizeWithJwt, controller.remove)

module.exports = Router
