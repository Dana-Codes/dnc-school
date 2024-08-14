//Import the Express.js module
const express = require ("express")
const morgan = require('morgan')
const books = require('./books.json')

//Create a new Express.js application instance
const app = express();

//Tell Express.js to parse incoming requests with JSON payloads
app.use(express.json());

//Tell Express.js to parse incoming request with URL-encoded payloads
app.use(express.urlencoded({extended: true}));

//Add Morgan logging middleware
app.use(morgan('dev'))

//Define a route for the root URL("/") that returns a "hello world" message
app.get('/', (req, res) => {
	res.send('hello World');
});

//Define a route for the root URL ("/") that returns a list of books
app.get('/books', (req, res) => {
	res.json(books);
})

//Add error handling middleware
app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send('Internal server Error')
})

//Start the server and listen to port 3000
app.listen(4000, () => {
	console.log('Server started on port 3000');
});

