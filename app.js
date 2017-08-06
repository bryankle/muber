const express = require('express'); // Express is used to simplify HTTP requests through Node; everything that can be done on Express can be done on Node
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

// ALWAYS place app.use above the routes call
app.use(bodyParser.json()); // Why are we referencing the JSON and its method? -> this assumes anything coming in is JSON and parse whatever comes in

// Router
// Watch for incoming requests of method GET
// to the route http://localhost:3050/api 
routes(app);

module.exports = app;