const { Strategy, ExtractJwt } = require('passport-jwt')
const { key } = require('../../config/app')
const User = require('../../app/Users/repository')

const jwtFromRequest = ExtractJwt.fromHeader('x-access-token')

const options = {
  secretOrKey: key,
  jwtFromRequest
}

const verifyToken = (payload, done) => (
  User
    .findOne(payload.user)
    .then(user => done(null, user))
    .catch(error => done(error, false))
)

module.exports = new Strategy(options, verifyToken)
