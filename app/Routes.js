/**
 * Routes
 */
const Users = require('./Users')
const Organizations = require('./Organizations')

module.exports = app => {
  app.use('/users', Users)
  app.use('/ongs', Organizations)
}
