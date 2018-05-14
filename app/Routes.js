/**
 * Routes
 */
const { jwtAuth } = require('@anarklab/expressive-passport')

const Users = require('./Users')
const Organizations = require('./Organizations')
const Campaingns = require('./Campaigns')

module.exports = app => {
  app.use('/users', jwtAuth, Users)
  app.use('/ongs', jwtAuth, Organizations)
  app.use('/campaigns', jwtAuth, Campaingns)
}
