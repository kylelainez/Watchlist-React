require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const cors = require('cors');
const routes = require('./server/routes');
const session = require('express-session');
const passport = require('passport')

const app = express();

require('./server/database');
require('./server/passport');

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use(
	session({
		secret: 'React Watchlist!',
		resave: false,
		saveUninitialized: true
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
	console.log(res.locals, 'this');
	res.locals.user = req.user;
	next();
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/', routes);

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});