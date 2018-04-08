const Validator = require('validatorjs')

const schema = {
  name: 'string|required',
  email: 'email|required',
  password: 'string|min:6'
}

module.exports = (request, response, next) => {
  const validate = new Validator(request.body, schema)

  if (validate.fails()) {
    return response.status(422).json(validate.errors)
  }

  return next()
}
