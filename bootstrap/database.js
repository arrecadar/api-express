const mongoose = require('@anarklab/expressive-mongodb')
const clean = require('@teamsight/mongoose-clean')
const paginate = require('mongoose-paginate')
const { MONGODB } = require('../config/database')

const database = mongoose(MONGODB)

// define globals plugins
database.plugin(clean)
database.plugin(paginate)

module.exports = database
