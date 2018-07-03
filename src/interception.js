'use strict'

module.exports = {
  proxyWork,
  interceptablePeer
}

function proxyWork(input) {
  // Call an _uniInterceptablePeer peer function
  let out = _uniInterceptablePeer(input)

  // Now we call the interceptablePeer, but in an uninterceptable way
  out = interceptablePeer(out)

  // Now all it in an interceptable way
  out = module.exports.interceptablePeer(out)

  /** Why this works:
   * at runtime, module.exports.interceptablePeer is an address pointer
   * the stub/spy operation changes that pointer to point at a different address
   * where a wrapper or replacement function is.
   *
   * When the stub/spy is reset,, the address is out back to what it started as
   *
   * Calling the function directly, references the functions actual location,
   * not an indicator of the location.
   */

  return out
}

function interceptablePeer(num) {
  return num + 1
}

function _uniInterceptablePeer(num) {
  return num * 10
}
