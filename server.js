'use strict';

const express = require('express');

function setup(){
	const routes = new express.Router();

	routes.get('/*', (req, res) => res.send('Hello World!'));

	return routes;
}

const app = express()
	.use(setup());

// Check if we're running in a lambda function
if (process.env.LAMBDA_TASK_ROOT) {
	const serverlessExpress = require('aws-serverless-express');
	const server = serverlessExpress.createServer(app);
	exports.handler = (event, context) => serverlessExpress.proxy(server, event, context);
	return;
}

app.listen(8080, () => console.log(`Listening on 8080`));
