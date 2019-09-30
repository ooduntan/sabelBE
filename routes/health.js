var Router = require('express').Router;

let healthRoutes = Router();

/* GET health route to show service is working */
healthRoutes.get('/', function (req, res) {
    res.json({status: 'UP'});
});

module.exports = healthRoutes;
