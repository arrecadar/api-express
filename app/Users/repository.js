const User = require('./model')

const handleSaveErrors = error => {
  if (error.code === 11000) {
    throw new Error('email already exists')
  }

  throw new Error(error)
}

const find = () => User.find()
const findOne = id => User.findById(id)
const create = user => new User(user).save().catch(handleSaveErrors)
const save = (id, data) => User.findByIdAndUpdate(id, data, {new: true}).catch(handleSaveErrors)
const remove = id => User.findByIdAndRemove(id)

module.exports = {
  find,
  findOne,
  create,
  save,
  remove
}
