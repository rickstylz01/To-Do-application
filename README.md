# soloNodeTodo
This is a simple Todo application that let's you create, edit, delete, and mark task's as *done*.  I just completed my 7-month Reskill Americans program.  I was in the back-end developer track of the program in which I learned processes like how to use what I dub the **MEEN STACK** which stands for Mongoose, ExpressJS, EJS, and NodeJS. This was a more challangeing task than I thought especially because I decided to plan and execute it on my own using the knowledge I gained from the RA program.  It is not quite finished yet, I plan to implement some sort of authentication/authorization.

## STEP 1: Initialize the project
**npm init**

## STEP 2: What you need to install 
- [body-parcer](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose) -
*mongoose requires a connection to a MongoDB database*
- [nodemon](https://www.npmjs.com/package/nodemon)

## STEP 3: Configuring nodemon
Once the nodemon package is installed, in the package.json file, change the *start* & *dev* scripts 
- *"start": "node src/app.js"*
- *"dev": "nodemon src/app.js"*

This will allow you to use *npm run dev* command to in your console or terminal to run the application.

## STEP 4: Setting up folder structure
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
