const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://ADMIN:PASSWORD@cluster0.o5q8t.mongodb.net/test?retryWrites=true&w=majority')
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/users', require('./routes/users'));

//static files


//error handlers


//Start server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});