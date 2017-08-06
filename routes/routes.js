module.exports = (app) => {

    app.get('/api', (req, res) => { // App listens on '/api' and executes callback when GET is requested. Takes 2 arguments, req and res object 
        res.send({ hi: 'there' });
    })

};