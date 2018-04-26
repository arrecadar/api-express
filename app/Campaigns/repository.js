const Campaign = require('./model')
const Transform = require('../Transform')

const handleSaveErrors = error => {
  throw new Error(error)
}

const find = ({ page = 1, limit = 15 }) => (
  Campaign
    .paginate({}, { limit, page })
    .then(Transform)
)

const findOne = id => (
  Campaign
    .findById(id)
    .populate('ong')
)

const create = campaign => (
  new Campaign(campaign)
    .save()
    .catch(handleSaveErrors)
)

module.exports = {
  find,
  create,
  findOne
}
