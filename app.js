var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({ secret: 'secret'}));

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

//Import route files for coursedetails and index
var controller = require('./controller/mainController.js');
var user_controller = require('./controller/userController.js');
var connection_controller = require('./controller/connectionController.js');


app.use('/', connection_controller);

app.use('/savedConnections', user_controller);
// app.use('/connections/', connection_controller);
// app.use('/connection/', connection_controller);


app.listen(8084, '127.0.0.1');

module.exports = app;
