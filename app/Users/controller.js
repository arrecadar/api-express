const {
  Controller,
  Transform
} = require('@anarklab/expressive-controller')
const { handleError, handleResponse } = require('../Responses')

const Repository = require('./repository')
const controller = Controller(Repository)

const show = (request, response) => {
  const id = request.params.id

  Repository
    .findOne(id)
    .then(Transform)
    .then(handleResponse(response))
    .catch(handleError(response))
}

module.exports = {
  ...controller,
  show
}
