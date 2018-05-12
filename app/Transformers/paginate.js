const { applySpec, prop } = require('ramda')

module.exports = applySpec({
  data: prop('docs'),
  meta: {
    total: prop('total'),
    pages: prop('pages'),
    currentPage: prop('page'),
    limit: prop('limit')
  }
})
