const mongoose = require('../../bootstrap/database')
const { Schema } = mongoose

const CampaignsSchema = new Schema({
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
  ong: {
    type: Schema.Types.ObjectId,
    ref: 'Organization',
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Campaign', CampaignsSchema)
