# soloNodeTodo
This is a simple Todo application that let's you create, edit, delete, and mark task's as *done*.  I used **MongoDb** to create a database and **Mongoose** for the purposes of being able to define the schema for the documents in that particular collection. I was in the back-end developer track of a 7-month program in which I learned processes like how to use what I dub the **MEEN STACK** which stands for Mongoose, ExpressJS, EJS, and NodeJS. This task, of creating a simple todo application, was more challangeing than I originally thought especially because I decided to plan and execute it on my own using the knowledge I gained from the Reskill Americans program.  It is not quite finished yet, I plan to implement some sort of authentication/authorization in the future.

## PREREQUISITE
### MongoDB
I am using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and have downloaded it locally which allows me to also use [MongoDB Compass](https://www.mongodb.com/products/compass).  It is free, no credit card is required. It is a pretty simple setup just follow the instructions in order to build a cluster. It is a NoSQL datbase.  It allows you to have a deployment in the cloud so you don't have to have it in your machine. 

### MongoDB Setup - Step 1
For a *cloud provider* I chose AWS and then free option for "shared clusters." 

The rest of the settings I left as default and pretty much skipped to "Cluster Name". Choose a name for your cluster as you see fit.

Once you create your cluster, head to the "Network access tab"
![network access tab](Screen Shot 2021-11-05 at 4.50.26 PM)

 

Once you have set up your MongoDB Cluster you can move on to the first step of the projects initialization.


## STEP 1: Initialize the project
Make sure to create a new folder with your desired "app name" and open the folder with any IDE or text editor you prefer and run the following code in the command line.

**npm init**

## STEP 2: What you need to install 
- [body-parcer](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose) -
*mongoose requires a connection to a MongoDB database*
- [nodemon](https://www.npmjs.com/package/nodemon)

To install these packages, in your command line, run the command **npm install** or **npm i** as a shorthand. 

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
