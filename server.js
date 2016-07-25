var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash');

var morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override')
    session = require('express-session'),
    localStrategies = require('passport-local');

var database = require('./config/database.js');

mongoose.connect(database.url, function(err, res){
    if(err){ console.log('Error Connecting to:' + database.url + "\n" + err);}
    else{console.log('Connection Successful');}
    //Drops Database
    //mongoose.connection.db.dropDatabase();
});

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vdn.api+json'}));
app.use(cookieParser());
app.use(methodOverride());

app.use(session({secret: 'ihatecats'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// require('./app/controllers');
app.use('/', [
    require('./controllers/homeCtrl.js'),
    require('./controllers/loginCtrl.js'),
    require('./controllers/profileCtrl.js'),
    require('./controllers/signUpCtrl.js'),
    require('./controllers/editCtrl.js')
]);

// app.use('/', require('./controllers/'));

app.listen(port);
console.log('Listening on port ' + port);
