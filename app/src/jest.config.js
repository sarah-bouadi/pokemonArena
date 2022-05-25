const {defaults} = require('jest-config');


module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"]
}
