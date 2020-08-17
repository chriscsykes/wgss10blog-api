# Lab 5

In this lab, I built an Express.js and MongoDB CRUD api server to connect with my Lab 4 react+redux blog frontend. The server, hosted on Heroku, provides endpoints for creating, fetching, updating, and deleting blog posts. 

### SA 8
For SA8, I added authentication. Now users are able to sign up, sign in, and sign out. In order to post, edit, and delete, a user must be signed in. Now, each post also shows who it was posted by. Used Passport.js to make JWT's.

[Heroku app instance Lab 5](https://sykesblog.herokuapp.com/)

[Heroku app instance SA8](https://sykes-blog-sa8.herokuapp.com/api)

[Lab 4 surge url with authentication](http://chrissykes-cs52-blog-with-auth.surge.sh/)

## What Worked Well
- This lab wasn't too bad because we were introduced to MongoDB and Mongoose in SA7.
- It was cool too see how the frontend and backend work together. 

### SA8
- It was pretty easy to add in new routes
- I feel more comfortable using heroku and surge to deploy my webpages.

## What Didn't
- I think Heroku was down for a bit because it wouldn't let me add the `MONGODB_URI` connection string as a variable. It eventually worked.
- I had some issues because I didn't realize that in my `router.js` file, I made a route '/posts/:postID" but in my post_controller, I was using req.params.id. I resolved this issue by changing the route to '/posts/:id'.

### SA8
- I had a bit of trouble figuring out how to display the email of the user in the post component. In the end, I ended up storing the email (username) in redux state. 
- Going through and refactoring code to include authentication was a little more tedious than I expected.

## Extra Credit 
None

