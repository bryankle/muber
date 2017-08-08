const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
    // App listens on '/api' and executes callback when GET is requested. Takes 2 arguments, req and res object 
    app.get('/api', DriversController.greeting);

    app.post('/api/drivers', DriversController.create);
    
    app.put('./api/drivers/:id', DriversController.edit); // :id match any ID that comes after slash
};