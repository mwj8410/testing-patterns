'use strict'

const needle = require('needle')

module.exports = {
  login
}

async function login() {
  return await needle(
    'put',
    'https://example.com/login',
    { username: 'fake', password: 'fake' }
  )
  .then((resp) => {
    if (resp.statusCode === 404) {
      return { code: resp.statusCode, error: 'Failure to authenticate.' }
    }
    return resp.body.data
  })
  .catch((err) => {
    return { error: err.message }
  })
}
