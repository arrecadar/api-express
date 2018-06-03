/**
 * Routes
 */
const Users = require('./Users')
const Organizations = require('./Organizations')
const Campaingns = require('./Campaigns')
const Authentication = require('./Authentication')

module.exports = app => {
  app.use('/users', Users)
  app.use('/ongs', Organizations)
  app.use('/campaigns', Campaingns)
  app.use('/', Authentication)
}
