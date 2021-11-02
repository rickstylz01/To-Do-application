require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT||3000;
const indexRoute = require('./routes/todoRoutes');



// =======================================================
//  MONGO DB CONNECTION
// =======================================================
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology: true
});

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
app.use(indexRoute);





app.listen(PORT, () => console.log(`listening at ${PORT}`));
