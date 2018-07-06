'use strict'

const {expect} = require('chai')

const nocks = require('../nocks/example.nocks')

const requests = require('../../src/requests')

describe('Nocking HTTP calls', () => {
  /**
   * This is a specialized way of interception that intercepts outbound HTTP
   * traffic and and responds with mock data. for code that utilizes callbacks
   * you can achieve the same results using normal Sinon mocks if the code also
   * leverages the function based approach to using the request (or similar)
   * library. For example, `request({ method: 'GET', ... })` is cannot be mocked
   * in tests while `request.get({...})` can be.
   *
   * Using Nock, you can still isolate code without requiring that it leverage
   * specific expression styles. This is, in my opinion, the easiest way to test
   * async code that makes HTTP requests.
   */

  it('logs in when provided with the correct credentials', async () => {
    nocks.loginSuccess()

    const res = await requests.login()

    // Clean up as soon as possible
    nocks.restore()

    expect(res.id).equals('00000000-0000-4000-a000-000000000000')
    expect(res.name_display).equals('Fake User')


  })

  it('logs in when provided with the correct credentials', async () => {
    nocks.loginFail()

    const res = await requests.login()

    // Clean up as soon as possible
    nocks.restore()

    expect(res.code).equals(404)
    expect(res.error).equals('Failure to authenticate.')
  })
})
