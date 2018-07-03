'use strict'

const {expect} = require('chai')

describe('e2e: First Module', () => {

  describe('Top Section', () => {
    it('does a critical thing. @critical @smoke', () => {
      expect(1).equal(1)
    })

    it('does a smoke thing. @smoke', () => {
      expect(1).equal(1)
    })

    it('does a regression thing. @regression', () => {
      expect(1).equal(1)
    })
  })

  describe('Body Section', () => {
    it('does a critical thing. @critical @smoke', () => {
      expect(1).equal(1)
    })

    it('does a smoke thing. @smoke', () => {
      expect(1).equal(1)
    })

    it('does a regression thing. @regression', () => {
      expect(1).equal(1)
    })
  })

  describe('Footer Section', () => {
    it('does a critical thing. @critical @smoke', () => {
      expect(1).equal(1)
    })

    it('does a smoke thing. @smoke', () => {
      expect(1).equal(1)
    })

    it('does a regression thing. @regression', () => {
      expect(1).equal(1)
    })
  })

})
