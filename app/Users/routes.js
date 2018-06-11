const Router = require('express').Router()
const { authorizeWithJwt } = require('../Authentication/middleware')

const users = require('./controller')
const request = require('./request')

Router.get('/:id', authorizeWithJwt, users.show)
Router.post('/', request, users.store)
Router.get('/', authorizeWithJwt, users.index)

module.exports = Router
