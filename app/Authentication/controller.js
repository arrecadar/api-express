const passport = require('passport')
const { handleUnauthorized } = require('../Responses')

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

module.exports = {
  login
}
