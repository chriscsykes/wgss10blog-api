# Lab 5

In this lab, I built an Express.js and MongoDB CRUD api server to connect with my Lab 4 react+redux blog frontend. The server, hosted on Heroku, provides endpoints for creating, fetching, updating, and deleting blog posts. 

[Heroku app instance](https://sykesblog.herokuapp.com/)

[Lab 4 surge url](http://chrissykes-cs52-lab4.surge.sh/)

## What Worked Well
- This lab wasn't too bad because we were introduced to MongoDB and Mongoose in SA7.
- It was cool too see how the frontend and backend work together. 

## What Didn't
- I think Heroku was down for a bit because it wouldn't let me add the `MONGODB_URI` connection string as a variable. It eventually worked.
- I had some issues because I didn't realize that in my `router.js` file, I made a route '/posts/:postID" but in my post_controller, I was using req.params.id. I resolved this issue by changing the route to '/posts/:id'.


