const Validator = require('validatorjs')

const schema = {
  name: 'string|required',
  email: 'email|required'
}

module.exports = (request, response, next) => {
  const validation = new Validator(request.body, schema)

  if (validation.fails()) {
    return response.status(422).json(validation.errors)
  }

  return next()
}
