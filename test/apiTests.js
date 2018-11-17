/**
 * API Tests
 */

 //Dependencies 
 const http = require('http'),
       querystring = require('querystring'),
       assert = require('assert');

/**
 *  Universal function for making test requests
 */
 function makeRequest(method = 'GET', path = '', payload = {}, callback){
    let requestDetails = {
        protocol: 'http:',
        hostname: 'localhost',
        port: '3000',
        method: method,
        path: path,
        headers: {
            'Content-Type': 'application/json',
        }
    }

    let request = http.request(requestDetails, (response) => {
        callback(response);
    });
    request.write(querystring.stringify(payload));
    request.end();
 }

 //API tests container 
let apiTests = {};

//check if api works fine
apiTests['post request to /user should return response with 200 code'] = done => {
    let testUser = {
        "firstName": "Jason",
        "lastName": "Born",
        "email": "test@n.com",
        "address": "unknown",
        "phone": "unknown",
        "agreement": true,
        "password": "complicatedPasswordHere"
    }

    makeRequest('POST', '/user', testUser, (response) => {
        assert.equal(response.statusCode, 200);
        done();
    });
}

module.exports = apiTests;