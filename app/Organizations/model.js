const mongoose = require('../../bootstrap/database')
const { Schema } = mongoose

const OrganizationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    city: { type: String, required: true },
    complement: String,
    neighborhood: { type: String, required: true },
    number: { type: String, required: true },
    state: { type: String, required: true },
    street: { type: String, required: true },
    zipcode: { type: String, required: true }
  },
  contact: {
    emails: [{type: String, required: true}],
    phones: [{type: String, required: true}],
    links: [String]
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  persons: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    select: false
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Organization', OrganizationSchema)
