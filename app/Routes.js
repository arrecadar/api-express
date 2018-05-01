/**
 * Routes
 */
const Users = require('./Users')
const Organizations = require('./Organizations')
const Campaingns = require('./Campaigns')

module.exports = app => {
  app.use('/users', Users)
  app.use('/ongs', Organizations)
  app.use('/campaigns', Campaingns)
}
