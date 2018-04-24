const Campaigns = require('./model')
const Transform = require('../Transform')

const find = ({ page = 1, limit = 15 }) => (
  Campaigns
    .paginate({}, { limit, page })
    .then(Transform)
)

module.exports = {
  find
}
