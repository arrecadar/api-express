const passport = require('passport')
const { handleUnauthorized } = require('../Responses')

const authorize = ({ isAuthenticated }, response, next) => {
  if (isAuthenticated()) {
    return next()
  }

  return handleUnauthorized(response)
}

const authorizeWithJwt = (request, response, next) => (
  passport.authenticate('jwt', (error, user) => {
    if (!user || error) {
      return handleUnauthorized(response)
    }

    return next()
  })(request, response, next)
)

module.exports = {
  authorize,
  authorizeWithJwt
}
