/**
 * User tests
 */
const supertest = require('supertest')
const app = require('../bootstrap/app')

let request

describe('Users', () => {
  beforeAll(() => (request = supertest(app)))

  it('should return an empty users list', () =>
    request
      .get('/users')
      .expect(200, {})
  )
})
