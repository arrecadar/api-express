const {
  Controller,
  Transform
} = require('@anarklab/expressive-controller')
const { split, defaultTo } = require('ramda')
const Repository = require('./repository')

const { handleError, handleResponse } = require('../Responses')

const index = (request, response) => {
  const { page, limit } = request.query

  Repository
    .find({ page, limit })
    .then(handleResponse(response))
    .then(handleError(response))
}

const show = (request, response) => {
  const { id } = request.params
  const { includes } = request.query

  const query = split(',', defaultTo('', includes))

  Repository
    .findOne(id, query)
    .then(Transform)
    .then(handleResponse(response))
    .catch(handleError(response))
}

module.exports = {
  ...Controller(Repository),
  index,
  show
}
