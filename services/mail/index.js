const nodemailer = require('nodemailer')
const {
  host,
  username,
  password,
  sender
} = require('../../config/mail')

const transporter = nodemailer.createTransport({
  service: host,
  auth: {
    user: username,
    pass: password
  }
})

const defaultMailOptions = {
  from: sender
}

const dispatch = mail => transporter.sendMail({
  ...defaultMailOptions,
  ...mail
}, error => {
  if (error) {
    throw error
  }

  return true
})

module.exports = {
  dispatch
}
