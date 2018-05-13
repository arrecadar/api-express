const Transform = require('../Transformers/paginate')
const Organization = require('./model')

const handleSaveErrors = error => {
  throw new Error(error)
}

const find = ({ page = 1, limit = 15 }) => (
  Organization
    .paginate({}, { limit, page })
    .then(Transform)
)

const findOne = (id, query) => (
  Organization
    .findOne({ _id: id })
    .populate([...query, 'owner'])
)
const create = ong => new Organization(ong).save().catch(handleSaveErrors)
const save = (id, data) => (
  Organization
    .findByIdAndUpdate(id, data)
    .catch(handleSaveErrors)
)
const remove = id => Organization.findOneAndRemove(id)

module.exports = {
  find,
  create,
  findOne,
  remove,
  save
}
