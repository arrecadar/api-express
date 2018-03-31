/**
 * Routes
 */
const Users = require('./Users')

module.exports = app => {
  app.use('/users', Users)
}
