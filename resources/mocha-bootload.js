'use strict';

var chai = require('chai');

var chaiSubset = require('chai-subset');
chai.use(chaiSubset);

process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection');
  console.error(error && error.stack || error);
});
