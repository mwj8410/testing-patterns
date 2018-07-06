'use strict'

const nock = require('nock')


const RESP_LOGIN_SUCCESS = require('../fixtures/responses/example/login-success.resp.json')

const BASE_URL = 'https://example.com'

module.exports = {
  restore: () => {
    nock.cleanAll()
  },
  loginSuccess: () => {
    return nock(BASE_URL).put('/login', { username: /.+/i, password: /.+/i })
      .reply(200, RESP_LOGIN_SUCCESS)
  },
  loginFail: () => {
    return nock(BASE_URL).put('/login', { username: /.+/i, password: /.+/i })
      .reply(404)
  }
}
