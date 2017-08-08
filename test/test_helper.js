const mongoose = require('mongoose');

before(done => { // Checks if test environment is active; note that conditional to determine database being run is not in app.js; why?
    mongoose.connect('mongodb://localhost/muber_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.log('Warning', error);
        });

    beforeEach(done => {
        const { drivers } = mongoose.connection.collections;
        drivers.drop()
            .then(() => done()) 
            .catch(() => done()); // Very first time database runs error thrown to drop non existent collection
    })
});