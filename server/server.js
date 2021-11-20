const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const entryController = require('./controllers/EntryController.js');

//intialize port 3000 const
const PORT = 3000;

//init your server as app
const app = express();

//this creates a mongoose db
const MONGO_URI = 'mongodb+srv://nichsuz:<password>@cluster0.j7woi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//suzuki URI - mongodb+srv://nichsuz:<password>@cluster0.j7woi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: ''});

// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('database connected'))


//url encoded and json body parsers
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));


//test to send main file to 3000
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
});


 


//404 error handler
app.use('*', (req, res) => {
  return res.status(418).json('Could not find what you\'re looking for so you\'re a teapot');
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

















module.exports = app;