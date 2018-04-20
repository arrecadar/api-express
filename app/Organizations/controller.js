const {
  Controller
} = require('@anarklab/expressive-controller')
const Repository = require('./repository')

const { handleError, handleResponse } = require('../Responses')

const index = (request, response) => {
  const { page, limit } = request.query

  Repository
    .find({ page, limit })
    .then(handleResponse(response))
    .then(handleError(response))
}

module.exports = {
  ...Controller(Repository),
  index
}
