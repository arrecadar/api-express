/**
 * Start Application
 */
const helmet = require('helmet')
const morgan = require('morgan')
const consign = require('consign')
const express = require('express')
const bodyParser = require('body-parser')
const validate = require('express-validator')

const { locale, env } = require('../config/app')

const app = express()
const logger = env === 'development' ? 'dev' : 'common'

app.use(helmet())
app.use(morgan(logger))
app.use(validate())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

consign({ locale })
  .include('app/Routes.js')
  .into(app)

module.exports = app
