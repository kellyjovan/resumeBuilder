var express        = require('express'),
    app            = express(),
    port           = process.env.PORT || 8080,
    mongoose       = require('mongoose'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    database    = require('./config/database.js'),
    morgan         = require('morgan');

//db.on('error', console.error.bind('console', 'connection error: '));
mongoose.connect(database.url, function(err, res){
    if(err){ console.log('Error Connecting to:' + database.url + "\n" + err);}
    else{console.log('Connection Successful');}
});
//var User = require('./models/user');

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vdn.api+json'}));
app.use(methodOverride());

var homeCtrl = require('./controllers/homeCtrl.js'),
    loginCtrl = require('./controllers/loginCtrl.js'),
    profileCtrl = require('./controllers/profileCtrl.js'),
    signUpCtrl = require('./controllers/signUpCtrl.js');

app.use('/', homeCtrl);
app.use('/', loginCtrl);
app.use('/', profileCtrl);
app.use('/', signUpCtrl);

app.listen(port);
console.log('Listening on port ' + port);