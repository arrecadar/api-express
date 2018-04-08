const {
  pipe,
  prop,
  isEmpty,
  not
} = require('ramda')

const {
  Controller,
  Responses,
  Transform
} = require('@anarklab/expressive-controller')

const Repository = require('./repository')
const controller = Controller(Repository)
const {
  responseWithInternalServerError,
  responseWithNotFoundError,
  responseWithOK
} = Responses

const userExists = pipe(prop('data'), isEmpty, not)

const notFound = response => responseWithNotFoundError(response)(['user not found'])

const handleUserResponse = response => user =>
  userExists(user)
    ? responseWithOK(response)(user)
    : notFound(response)

const handleErrorObjectId = response => error =>
  error.kind === 'ObjectId'
    ? notFound(response)
    : responseWithInternalServerError(response)

const show = (request, response) => {
  const id = request.params.id

  Repository
    .findOne(id)
    .then(Transform)
    .then(handleUserResponse(response))
    .catch(handleErrorObjectId(response))
}

module.exports = {
  ...controller,
  show
}
