const express = require('express'); // Express is used to simplify HTTP requests through Node; everything that can be done on Express can be done on Node

const app = express();

// Router
app.get('./api', () => { // App listens on './api' and executes callback when GET is requested

})

module.exports = app;