const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
    // App listens on '/api' and executes callback when GET is requested. Takes 2 arguments, req and res object 
    app.get('/api', DriversController.greeting)

};