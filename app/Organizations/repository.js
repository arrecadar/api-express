const Transform = require('../Transform')
const Organization = require('./model')

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

module.exports = {
  find
  findOne,
}
