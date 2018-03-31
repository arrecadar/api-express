const mongoose = require('@anarklab/expressive-mongodb')
const { MONGODB } = require('../config/database')

module.exports = mongoose(MONGODB)
