/**
 * Start Application
 */
const helmet = require('helmet')
const morgan = require('morgan')
const consign = require('consign')
const express = require('express')
const bodyParser = require('body-parser')

const { env } = require('../config/app')

const app = express()
const logger = env === 'development' ? 'dev' : 'common'

app.use(helmet())
app.use(morgan(logger))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

consign()
  .include('bootstrap/database.js')
  .then('app/Routes.js')
  .into(app)

module.exports = app
