const Router = require('express').Router()
const { show } = require('./controller')

Router.get('/', show)

module.exports = Router
