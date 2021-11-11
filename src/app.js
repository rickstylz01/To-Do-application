require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const indexRoute = require('./routes/todoRoutes');
const authRoute = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT||3000;

// =======================================================
//  MONGO DB CONNECTION
// =======================================================
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology: true
});

// =======================================================
//  PASSPORT CONFIG
// =======================================================
require('./config/passport')(passport);

// =======================================================
//  EJS
// =======================================================
// Require static assets from the src folder
app.use(express.static(path.join(__dirname, 'src')));

// Set 'views' directory for any views being rendered with res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// =======================================================
//  MIDDLEWARE
// =======================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================================================
//  ROUTES
// =======================================================
app.use(authRoute);
app.use(indexRoute);

// =======================================================
//  SESSION CONFIG
// =======================================================
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection})
  })
);

// =======================================================
//  PASSPORT MIDDLEWARE
// =======================================================
app.use(passport.initialize);
app.use(passport.session);

app.listen(PORT, () => console.log(`listening at ${PORT}`));
