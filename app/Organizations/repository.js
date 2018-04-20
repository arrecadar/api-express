const Transform = require('../Transform')
const Organization = require('./model')

const find = ({ page = 1, limit = 15 }) => (
  Organization
    .paginate({}, { limit, page })
    .then(Transform)
)

module.exports = {
  find
}
