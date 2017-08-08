const express = require('express'); // Express is used to simplify HTTP requests through Node; everything that can be done on Express can be done on Node
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Connects MongoDB to Mongoose
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise; // Depracation notice fix
if (process.env.NODE_ENV !== 'test') { // If running a development environment, run normal database to not drop collection while running
    mongoose.connect('mongodb://localhost/muber'); // Connects MongoDB to Mongoose; sometimes error or success message displays here   
}

// ALWAYS place app.use above the routes call
app.use(bodyParser.json()); // Why are we referencing the JSON and its method? -> this assumes anything coming in is JSON and parse whatever comes in

// Router
// Watch for incoming requests of method GET
// to the route http://localhost:3050/api 
routes(app);

app.use((err, req, res, next) => {
    console.log(err);
})
// err - throws an error if previous middleware produced an error
// req - incoming request object
// res - outgoing response object
// next - not like the others in any way; next is a function, forcibly called to execute next middleware

module.exports = app;