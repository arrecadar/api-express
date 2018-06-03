const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const User = require('../app/Users/repository')

const strategies = require('./strategies')

const {
  DB_CONNECTION,
  DB_HOSTNAME,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD
} = require('../config/database')

const { sessionKey } = require('../config/app')

module.exports = app => {
  app.use(session({
    secret: sessionKey,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: `${DB_CONNECTION}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
    })
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  // passport serializers
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => done(null, User.findOne(id)))

  // create strategies
  passport.use(strategies.local)
  passport.use(strategies.jwt)
}
