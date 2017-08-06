const express = require('express'); // Express is used to simplify HTTP requests through Node; everything that can be done on Express can be done on Node
const routes = require('./routes/routes');
const app = express();

// Router
// Watch for incoming requests of method GET
// to the route http://localhost:3050/api 
routes(app);

module.exports = app;