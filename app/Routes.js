/**
 * Routes
 */
const Status = require('./Status')
const Users = require('./Users')
const Organizations = require('./Organizations')
const Campaingns = require('./Campaigns')
const Authentication = require('./Authentication')

module.exports = app => {
  app.use('/status', Status)
  app.use('/users', Users)
  app.use('/ongs', Organizations)
  app.use('/campaigns', Campaingns)
  app.use('/', Authentication)
}
