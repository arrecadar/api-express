const passport = require('passport')
const Token = require('./token')
const trasnformUser = require('../Transformers/user')
const UserRepository = require('../Users/repository')
const { handleUnauthorized, handleResponse } = require('../Responses')

const login = (request, response) => (
  passport.authenticate('local', (error, user) => {
    if (error || !user) {
      return handleUnauthorized(response)
    }

    return response.json({
      data: user
    })
  })(request, response)
)

const confirmation = (request, response) => {
  const { user } = Token.decode(request.query.token, ['user'])

  UserRepository
    .save(user, { activated: true })
    .then(trasnformUser.withToken)
    .then(handleResponse(response))
}

module.exports = {
  login,
  confirmation
}
