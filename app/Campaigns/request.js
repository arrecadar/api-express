const validate = require('@anarklab/expressive-request')

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
  ong: 'string|required'
}

module.exports = validate(schema)
