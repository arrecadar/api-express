const bcrypt = require('bcrypt')
const mongoose = require('../../bootstrap/database')
const { Schema } = mongoose

const UserScheme = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  activated: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

UserScheme.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  return bcrypt.hash(this.password, 12)
    .then(hash => {
      this.password = hash
    })
    .catch(next)
})

UserScheme.methods.isValidPassword = function (password) {
  return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserScheme)
