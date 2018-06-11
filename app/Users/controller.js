const { Controller, Transform } = require('@anarklab/expressive-controller')
const Repository = require('./repository')
const SendEmail = require('../../services/mail/send')
const { transform: transformUser } = require('../Transformers/user')
const { handleError, handleResponse } = require('../Responses')

const controller = Controller(Repository)

const show = (request, response) => {
  const id = request.params.id

  Repository
    .findOne(id)
    .then(Transform)
    .then(handleResponse(response))
    .catch(handleError(response))
}

const store = (request, response) => {
  Repository
    .create(request.body)
    .then(user => {
      SendEmail.confirmation(user)
      return user
    })
    .then(transformUser)
    .then(handleResponse(response))
    .catch(error => handleError(response)([error.message]))
}

module.exports = {
  ...controller,
  show,
  store
}
