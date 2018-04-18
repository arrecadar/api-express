const { applySpec, prop } = require('ramda')

const Transform = applySpec({
  data: prop('docs'),
  meta: {
    total: prop('total'),
    pages: prop('pages'),
    current: prop('page'),
    limit: prop('limit')
  }
})

module.exports = Transform
