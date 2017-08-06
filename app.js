const express = require('express'); // Express is used to simplify HTTP requests through Node; everything that can be done on Express can be done on Node

const app = express();

// Router
// Watch for incoming requests of method GET
// to the route http://localhost:3050/api 
app.get('/api', (req, res) => { // App listens on '/api' and executes callback when GET is requested. Takes 2 arguments, req and res object 
    res.send({ hi: 'there' });
})

module.exports = app;