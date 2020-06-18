var express = require('express');
var eventsApiRoutes = require('./events-api-routes');
var app = express();

app.use(eventsApiRoutes.apiRouter); //delegate REST API routes to apiRouter(s)

app.listen(8282 , function () {
	console.log("http://localhost:8282");
});