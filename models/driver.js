const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Adding PointSchema into driver.js because it is too small to separate into a new file
const PointSchema = new Schema({ // For GeoJSON
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], index: '2dsphere' }
})

const DriverSchema = new Schema({
    email: {
        type: String,
        required: true // Email required before proceeding
    },
    driving: {
        type: Boolean,
        default: false // Driver will default to not driving upon starting application
    },
    geometry: PointSchema
});

const Driver = mongoose.model('driver', DriverSchema);
module.exports = Driver;

// This model must be required somewhere for it ro run properly when referenced to ie: driver_controller_test