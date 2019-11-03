var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Mongoose
const mongoose = require('mongoose');
//config database
const configDB = require('./database/database');
//cors pour test en local
const cors = require('cors');

//route de base
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//init express serveur localhost:3000
var app = express();

//options de cors
let corsOptions = {
  origin:'*',
  optionsSuccessStatus: 200,
  useUnifiedTopology: true
};

//express appel cors
app.use(cors(corsOptions));

//connexion a mongodb -> mongoose
mongoose.connect(configDB.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//controle de la connexion
mongoose.set('useFindAndModify', false);

//variable db
let db = mongoose.connection;

//test de connexion
db.once('open', () => {
  console.log('Connexion étable à mongoDB via Monggose');
});

db.on('error', console.error.bind(console, 'Echec de la tentative de connexion a mongoDB'));


// Moteur de template = TWIG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Appel du router -> index.twig
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Si la route est introuvable
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
