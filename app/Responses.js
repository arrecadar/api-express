const { Responses } = require('@anarklab/expressive-controller')
const {
  prop,
  isEmpty,
  pipe,
  not
} = require('ramda')
const {
  responseWithOK,
  responseWithNotFoundError,
  responseWithInternalServerError
} = Responses

const resultExists = pipe(prop('data'), isEmpty, not)

const notFound = response => responseWithNotFoundError(response)(['not found'])

const handleResponse = response => result =>
  resultExists(result)
    ? responseWithOK(response)(result)
    : notFound(response)

const handleError = response => error =>
  error.kind === 'ObjectId'
    ? notFound(response)
    : responseWithInternalServerError(response)

const handleUnauthorized = response => (
  response.status(401).json({
    errors: [
      'Unauthorized'
    ]
  })
)

module.exports = {
  handleError,
  handleResponse,
  handleUnauthorized
}
