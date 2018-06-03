const fetch = require('node-fetch')
const { expect } = require('chai')

describe('Status', function () {
  let responseBody
  let responseStatus

  before(async function () {
    const response = await fetch('http://api:3000/status')
    responseBody = await response.text()
    responseStatus = response.status
  })

  it('should respond with status 200', function () {
    expect(responseStatus).to.equal(200)
  })

  it('should respond with body OK', function () {
    expect(responseBody).to.equal('OK')
  })
})
