/**
 * @module esdf-base/errors/TestError
 */

'use strict';

/**
 * A TestError is the base class for all errors generated by utilities when
 *  a test condition, assertion or specification is not met in testing.
 * @extends Error
 */
class TestError extends Error {
  /**
   * Get a new TestError.
   * @param {message} message - The message to set on the error.
   */
  constructor(message) {
    super(message);
    // Set the error's name to that of the error class:
    this.name = new.target.name;
    // Add a flag that's easy to check for the developer:
    this.isTestError = true;
    // Get a stack trace for debugging:
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, new.target);
    }
  }
}

module.exports = TestError;