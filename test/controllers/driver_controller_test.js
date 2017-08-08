// This test will test /controllers/drivers_controller.js and /routes/routes.js
const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Driver = mongoose.model('driver'); // Cannot require into here because of compatibility issues with Express and Mongoose; Mocha will try to require more than once. Must be required in at least one location for model code to run

describe('Drivers controller', () => {
    // Format test as method -> route -> result
    it('Post to /api/drivers creates a new driver', (done) => {
        // The test method used here will compare the number of drivers before and after creating a driver to confirm that a driver has been created
        Driver.count().then(count => {
            request(app)
                .post('/api/drivers')
                .send({ email: 'test@test.com' }) // This send is different than the send in app.js; this sends to server while other sends to user from response
                .end(() => {
                    Driver.count().then(newCount => {
                        assert(count + 1 === newCount);
                    });
                    done();
                })
        });
    });

    it('PUT to /api/drivers/id edits an existing driver', (done) => {
        // How to test
        // Create a driver
        // Edit driver
        // Pull driver and compare with old driver
        const driver = new Driver({ email: 't@t.com', driving: false })
        driver.save().then(() => {
            request(app) // After driver is saved, we will make a request to our application
                .put(`/api/drivers/${driver._id}`) // ES6 syntax
                .send({ driving: true }) // Switch 'driving' from false to true
                .end(() => {
                    Driver.findOne({ email: 't@t.com' })
                        .then((driver) => {
                            console.log(driver)
                            assert(driver.driving === true);
                            done();
                        })
                });
        });
    });
});