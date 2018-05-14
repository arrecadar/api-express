const mongoose = require('@anarklab/expressive-mongodb')
const clean = require('@teamsight/mongoose-clean')
const paginate = require('mongoose-paginate')
const {
  DB_CONNECTION,
  DB_HOSTNAME,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD
} = require('../config/database')

const connection = `${DB_CONNECTION}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
const database = mongoose(connection)

// define globals plugins
database.plugin(clean)
database.plugin(paginate)

module.exports = database
