const Validator = require('validatorjs')

const schema = {
  name: 'string|required',
  description: 'string|required',
  address: {
    city: 'string|required',
    complement: 'string',
    neighborhood: 'string|required',
    number: 'string|required',
    state: 'string|required|size:2',
    street: 'string|required',
    zipcode: 'string|required'
  },
  contact: {
    'emails.*': 'email',
    'phones.*': 'string|numeric',
    'links.*': 'url'
  },
  'persons.*': 'string'
}

module.exports = (request, response, next) => {
  const validation = new Validator(request.body, schema)

  if (validation.fails()) {
    return response.status(422).json(validation.errors)
  }

  return next()
}
