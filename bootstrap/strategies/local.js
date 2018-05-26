const jwt = require('jsonwebtoken')
const LocalStrategy = require('passport-local').Strategy
const { prop, applySpec } = require('ramda')
const User = require('../../app/Users/model')
const { key } = require('../../config/app')

const auth = (email, password, done) => (
  User
    .findOne({ email })
    .select('+password')
    .then(validatePasswordAndGetUser(password))
    .then(transformUser)
    .then(user => done(null, user))
    .catch(error => done(error, false))
)

const createUserToken = key => ({ id }) =>
  jwt.sign({ user: id }, key, {
    expiresIn: '15min',
    algorithm: 'HS256'
  })

const transformUser = applySpec({
  name: prop('name'),
  email: prop('email'),
  token: createUserToken(key),
  created_at: prop('created_at'),
  updated_at: prop('updated_at')
})

const validatePasswordAndGetUser = password => user => (
  user.isValidPassword(password)
    .then(valid => {
      if (valid) {
        return user
      }

      throw new Error('Invalid Credentials')
    })
)

module.exports = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, auth)
