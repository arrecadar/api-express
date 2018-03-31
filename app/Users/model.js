const mongoose = require('../../bootstrap/database')
const { Schema } = mongoose

const UserScheme = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  }
}) 

module.exports = mongoose.model('User', UserScheme)
