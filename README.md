# Travel-Blog

## Description

The Travel Blog was created as an example of a full-stack application where users can view, create, edit, and delete travel blog posts. Additionally, registered users can create and delete comments on existing blog posts. Users are able to register and log in to perform all functions.

### Register

Users may register themself to the Travel Blog by clicking on the "Register" button in the navigation bar. On this page the user will create a username and password for their account. Upon registration the user will be directed to their profile page so they can further edit their detail.

### Login

Registered users can login by clicking the login button in the navigation bar. Here they can use their username and password to login to the site. Here they are able to create and manage their content.

### View Blogs

<img src="image.png" width="500" align="right"/>

Users are able to view summaries of existing blog posts by clicking the "Blogs" link in the main menu. Users may click on an inividual blog to read the full post and view the accompanying image.

### Create Blogs

Registered users may create their own blog posts by clicking the "Write Blog" link in the main menu. from this page the user may craft their blog post by adding a title, post body, and the URL of a relevant image.

### Edit & Delete Blogs

Users may edit or delete ONLY blogs they have created. To do this, the user must visit the blog view of one of their posts. They may then select the "Edit Blog" or "Delete Blog" button at the bottom.

### Comments

Users may create and delete comments at the bottom of each blog post. They may only delete comments they have created.

## Demo

A live demo of the Travel Blog is available through Github pages. Here: https://djfancyal.github.io/Travel-Blog/

On this demo - a user may register to create an account, login, and perform all blog functions. Please participate and write your own blog post for other users to see!

## Technologies

This full stack application uses several front-end and back-end technologies. Specifically it uses the MERN Stack ([MongoDB](https://www.mongodb.com/), [Express.js](https://expressjs.com/), [React.js](https://react.dev/), and [Node.js](https://nodejs.org/en)).

### React

The front end of this application uses [React](https://react.dev/) to create a fluid user experience. React-Router-Dom is used to create the appearance of a multi page site, while users are moving between components. React has provided a seamless yet dynamic user experience.

### React Bootstrap

The front end is also styled using [React-Bootstrap](https://react-bootstrap.netlify.app/). This creates a familiar but consistent feel that is friendly to the average user.

### Express

The back end server is built using [Express.js](https://expressjs.com/). Express allowed us to use JavaScript for building our routes and serving data to the front end. Within Express we also used Bcrypt to hash and verify passwords. Additionally we create JSON Web Tokens for authentication.

### MongoDB

App data is stored in a [MongoDB](https://www.mongodb.com/) Atlas database. This contains all of the user, blog, and comment data that is used by our app.

## Technical Information

The Travel Blog may be installed and used locally. To do this, begin by downloading this repository. Once downloaded you will notice there are two directories - one for the client(front end) and one for the server(back end). You'll need to start both of these services separately.

To start the back end - open a console and change directory to the "server" folder. To start the server, enter "npm start" and the server will begin. However, you will likely need to add a couple of environment variables for it to work. Create a .env file and add these parameters:

- PORT (the number your server will run on)
- MONGO_URI (the URI of your Mongo database. This can be either local or cloud based)
- JWT_SECRET (this should be a string of 10-15 random characters)

To start the front end - open another console and navigate to the /client/travel_blog/ directory. Once there enter "npm start" to begin the React service. You should then be able to open the app in your web browser. If you would like to use this front end in a production environment then you must use "npm run build" to create the app build.

## Issues

There are several known issues with this app which will hopefully be fixed in the future:

- There can be improved use of the JSON web tokens to provide better authentication. Additionally using session tokens would add more security.
- There is definitely room for improvement of formatting on almost all pages.
- Users have very limited control over blog images. Ideally the users could upload their own photos (instead of linking them), they could add multiple images, and move their position within the post.
- It would be nice for users to write their own summaries - this would require an additionaly field available when creating posts.
