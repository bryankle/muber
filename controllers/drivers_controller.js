const Driver = require('../models/driver'); // If this line is removed, the application does not run; Error comes out as 'Schema hasn't been registered for model "driver"
// Mocha initiates everything at once? - The reason why the model is called as Schema, not require, in test
module.exports = {
    greeting(req, res) {
        console.log('Greeting was ran')
        res.send({ hi: 'there' })
    },

    create(req, res) {
        console.log('Then create was ran')
        console.log(req.body);
        res.send({ hi: 'there' });
        const driverProps = req.body; // req comes from driver_controller_test.js in email form
        Driver.create(driverProps)  // We create a new driver here based on the model which requires an email as a string. 
            .then(driver => res.send(driver)) // Once a driver has been created, let it be known as 'driver' and send back the driver as 'driver' to the user
    }
};

// Greeting and create run concurrently, create running after greeting

//Questions
// How are we able to call create within create?
// Why do all of the functions in the controller automatically run?