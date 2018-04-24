const validate = require('@anarklab/expressive-request')

const schema = {
  name: 'string|required',
  email: 'email|required',
  password: 'string|min:6'
}

module.exports = validate(schema)
