const jwt = require('jsonwebtoken')
const { key } = require('../../config/app')

const create = (data, expiresIn) => jwt.sign(data, key, {
  expiresIn,
  algorithm: 'HS256'
})

const decode = token => jwt.decode(token)

module.exports = {
  create: create,
  decode: decode
}
