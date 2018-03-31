const Router = require('express').Router()
const users = require('./controller')
const request = require('./request')

Router.get('/', users.index)
Router.get('/:id', users.show)
Router.patch('/:id', users.save)
Router.delete('/:id', users.remove)
Router.post('/', request, users.store)

module.exports = Router
