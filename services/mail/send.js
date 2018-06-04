const Token = require('../../app/Authentication/token')
const Mail = require('./index')

const confirmation = user => {
  const token = Token.create({ user: user.id }, '1day')
  const mail = {
    to: user.email,
    subject: 'Confirme seu cadastro',
    html: `
      <h3>Olá ${user.name}.</h3>
      <p>Você pode confirmar seu registro accesando este <a href="http://localhost:3000/confirmation?token=${token}">link.</a></p>
    `
  }

  return Mail.dispatch(mail)
}

module.exports = {
  confirmation
}
