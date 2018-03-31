const { Responses } = require('@anarklab/expressive-controller')

const validate = (request, response, next) => {
  request.checkBody('name', 'Field name is invalid').notEmpty()
  request.checkBody('email', 'Field email is invalid').notEmpty().isEmail()

  request.getValidationResult()
    .then(handleErrors(response, next))
    .catch(Responses.responseWithInternalServerError(response))
}

const handleErrors = (response, next) => errors => {
  if (errors.isEmpty()) {
    return next()
  }

  return Responses.responseWithUnprocessableEntity(response)(errors)
}

module.exports = validate
