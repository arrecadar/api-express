const { identity } = require('ramda')
const User = require('./model')

const find = () => User.find().catch(identity)
const findOne = id => User.find({ _id: id }).catch(identity)
const create = user => new User(user).save().catch(identity)
const save = (id, data) => User.findByIdAndUpdate(id, data).catch(identity)
const remove = id => User.findByIdAndRemove(id).catch(identity)

module.exports = {
  find,
  findOne,
  create,
  save,
  remove
}
