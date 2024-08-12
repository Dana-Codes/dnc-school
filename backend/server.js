//Import the Express.js module
const express = require('express');

//Create a new Express.js application instance
const app = express();

//Tell Express.js to parse incoming requests with JSON payloads
app.use(express.json());

//Tell Express.js to parse incoming request with URL-encoded payloads
app.use(express.urlencoded({extended: true}));

//Define a route for the root URL("/") that returns a "hello world" message
app.get('/', (req, res) => {
	res.send('hello World');
});

//Start the server and listen to port 3000
app.listen(3000, () => {
	console.log('Server started on port 3000');
});

