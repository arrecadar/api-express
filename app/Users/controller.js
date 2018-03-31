const { Controller } = require('@anarklab/expressive-controller')
const Repository = require('./repository')

module.exports = Controller(Repository)
