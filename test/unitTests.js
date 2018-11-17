/**
 * Unit tests
 */

 //Dependensies
 const lib = require('../app/lib'),
       assert = require('assert');
      
let unitTests = {}
unitTests['functionsForTest.getANumber should return number'] = done => {
    let value = lib.getANumber();
    assert.equal(typeof(value), 'number');
    done();
}

unitTests['functionsForTest.getANumber should return 1'] = done => {
    let value = lib.getANumber();
    assert.equal(value, 1);
    done();
}

unitTests['functionsForTest.getAString should return string'] = done => {
    let value = lib.getAString();
    assert.equal(typeof(value), 'string');
    done();
}

unitTests['functionsForTest.getJSON should return valid JSON'] = done => {
    let value = lib.getJSON();
    assert.doesNotThrow(() => {
        JSON.parse(value);
    }, 'JSON parse error');
    done();
}

module.exports = unitTests;