const assert = require('assert');
const request = require('supertest');// We will download npm package 'supertest' to replicate HTTP requests 
const app = require('../app'); // Requiring express application

// We would like to test to ensure that the app listens for incoming requests of type GET on /api and assert response of the object 
describe('The express app', () => {
    it('handles a GET request to /api', (done) => { // 'done' callback required for asynchronous task; HTTP requests are async in nature, most likely will always need 'done'
        request(app)
            .get('/api')
            .end((err, response) => {
                assert(response.body.hi === 'there');
                done();
            });
    });
}); 