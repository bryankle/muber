const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/muber_test');
});