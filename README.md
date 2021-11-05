# soloNodeTodo
This is a simple Todo application that let's you create, edit, delete, and mark task's as *done*.  I just completed my 7-month Reskill Americans program.  I was in the back-end developer track of the program in which I learned processes like how to use what I dub the **MEEN STACK** which stands for Mongoose, ExpressJS, EJS, and NodeJS. This was a more challangeing task than I thought especially because I decided to plan and execute it on my own using the knowledge I gained from the RA program.  It is not quite finished yet, I plan to implement some sort of authentication/authorization.

## STEP 1: Initialize the project
If you do not have [NodeJS](https://nodejs.org/en/download/) or [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=rlsavisitor&utm_source=google&utm_campaign=gs_americas_uscan_search_brand_atlas_desktop_rlsa&utm_term=install%20mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14291004602&adgroup=128837428507&gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VG26oconcY89Zc4Px85yCfjbujv8Z17hIQmrTpZtaP_XSrKMBqzwV4aAl_iEALw_wcB) installed or are unfamiliar with either,  Maker sure to research and get familiar with both.  I will not be going over the basic fundamentals of these.

Once these are installed and configured make sure to create a new folder with your desired "app name" and open the folder with any IDE or text editor you prefer and run the following code in the command line.

**npm init**

## STEP 2: Setting up the folder structure
I like to keep all my folders organized and inside a **src** folder.  The structure goes as follows:
- src
  - controllers
    - todoControllers.js
  - models
    - todoSchema.js
  - routes
    - todoRoutes.js
  - views
    - edit.ejs
    - index.ejs
  - app.js

## STEP 3: What you need to install 
- [body-parcer](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose) -
*mongoose requires a connection to a MongoDB database*
- [nodemon](https://www.npmjs.com/package/nodemon)
- 
To install these packages, in your command line, run the command **npm install *package-name*** or **npm i *package-name*** as a shorthand.  For a faster result, you can use all of the package names in one command for installation.

```
npm i body-parcer dotenv ejs express mongoose 
```

For *nodemon* use the command **npm i -D nodemon**. This install nodemon as a development dependency.  **nodemon** will restart the server automatically when any change is detected.

Once all the packages have been installed you can run the application using this command:
```
npm run dev
```

## STEP 4: Configuring nodemon
Once the nodemon package is installed, in the package.json file, change the *start* & *dev* scripts 
- *"start": "node src/app.js"*
- *"dev": "nodemon src/app.js"*

This will allow you to use *npm run dev* command to in your console or terminal to run the application.

## STEP 5: SET UP 
### File: .env

A . env file or dotenv file is a simple text configuration file for controlling your Applications environment constants. Between Local, Staging and Production environments, the majority of your Application will not change.

The setup should look something like this:
```
MONGO_URI=MONGODBCOLLECTIONURI
PORT=PORTNUMBER
```

### File: app.js

Import the necessary modules.
```
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT||3000;
const indexRoute = require('./routes/todoRoutes');
```

Connect to mongodb.
```
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology: true
});
```

Set express template.
```
//Require static assets fromt he src folder
app.use(express.static(path.join(__dirname, 'src')));

// Set 'views' directory for any views being rendered with res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
```

Set middleware
```
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

Set routes
```
app.use(indexRoute);
```

## What was the motivation for this project?
My motivation for this project was to put my knowledge of using the MEEN (Mongoose, Express, EJS, NodeJS) stack to use.  I wanted to build something simple and practical that can show my understanding in the use of these different programming tools.

## Why did I build this project?
I built this project to be able to place a new project on my portolio to present to potential jobs.

## What problem does it solve?
It solved my problem of creating a project from scratch.  I used it as a catalyst to rid my fear of planning and programming a fully functional app on my own.

## What did I learn?
I learned that patience truly is a virtue.  I came up to an issue where my "done" button and "delete" button would only work on the first (or oldest) task that was set.  Through much diliberation I learned that using deconstruction techniques on certain variables must be tested and thought of carefully while usying async/await. One simple underscore was preventing me from selecting the correct id for a task which led to the original problem.

## What makes this project stand out? 
This project stands out to be a personal triumph for myself.  It took a lot longer than originally planned but the outcome was a much sweeter nectar because of it.

## CREDITS
Although I did mention that I planned this project on my own, I did use a guide when I tried to create it the first time.  Unfortunately there were some issues when trying to use async/await with the original guide which is where I deviated.  [Here is the link to the original guide](https://dev.to/atultyagi612/build-a-basic-todo-app-with-nodejs-mongodb-20om).
