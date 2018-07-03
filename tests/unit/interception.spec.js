'use strict'

const {expect} = require('chai')
const sinon = require('sinon')

const stub = sinon.stub

const interception = require('../../src/interception')

describe('Function isolation through interception', () => {
  /**
   * There are manual ways to do this, but they do not provide the robust
   * features that Sinon provides.
   */

  it('without interception', () => {
    const value = interception.proxyWork(1)
    expect(value).equals(12)
  })

  it('with mock interception', () => {
    stub(interception, 'interceptablePeer').callsFake((callValue) => {
      expect(callValue).equals(11)
      // typically, you would return a test fixture of some sort here
      // You can get very detailed here by using fixtures and leveraging
      // stub.onCall(x)
      return 42

      // If you don't need to inspect the call, it's best to stub like...
      // stub(interception, 'interceptablePeer').returns(42)
    })

    const value = interception.proxyWork(1)

    // Do any checks needed on the stubs
    sinon.assert.calledOnce(interception.interceptablePeer)

    // Clean up the stubs as soon as possible
    // This allows later tests to provide similar operations on the same
    // functions
    interception.interceptablePeer.restore()

    expect(value).equals(42)
  })

})
