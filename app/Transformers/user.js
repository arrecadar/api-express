const { applySpec, prop } = require('ramda')
const Token = require('../Authentication/token')

const createUsertToken = ({ id }) => Token.create({ user: id }, '15min')

const withToken = applySpec({
  data: {
    id: prop('id'),
    name: prop('name'),
    email: prop('email'),
    token: createUsertToken,
    created_at: prop('created_at'),
    updated_at: prop('updated_at')
  }
})

const transform = applySpec({
  data: {
    id: prop('id'),
    name: prop('name'),
    email: prop('email'),
    created_at: prop('created_at'),
    updated_at: prop('updated_at')
  }
})

module.exports = {
  withToken,
  transform
}
