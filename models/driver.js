const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    email: {
        type: String,
        required: true // Email required before proceeding
    },
    driving: {
        type: Boolean,
        default: false // Driver will default to not driving upon starting application
    }
});

const Driver = mongoose.model('driver', DriverSchema);
model.exports = Driver;