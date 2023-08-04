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

App data is stored in a [Mongo](https://www.mongodb.com/) Atlas Database. This cloud solution stores all blog, author, and comment information.

## Technical Information

The Travel Blog may be installed and used locally. To do this begin by downloading this repository. Once downloaded you will notice two files - client and server. The client directory contains the front end service and the server directory contains the back end service. You will need to run both of these services for the app to work.

To start the back end, open a console and change into the server directory. You'll first need to create a .env file and provide these environment variables:

- PORT - the port the back end will run on.
- MONGO_URI - the URI of your MongoDB connection. This may be a local address or remote.
- JWT_SECRET - this will be a random string of 10-15 characters

Next you will need to install all of the dependencies by running "npm install". Lastly you can begin the app by running "npm start."

Now it's time to run the front end - open another console and change into the /client/travel_blog/ directory. Here you'll need to run "npm install" again to add dependencies. Then you may run "npm start" to begin the React service. You should now be able to access the app in your local web browser. If you'd like to create a production build of the React app then you must run "npm run build" to create the build files.

## Issues

The app has some known issues:

- The use of JSON Web Tokens can be improved for better content authorization. Also, session tokens would be more useful.
- Improvemnts to the styling on most of the pages would be beneficial.
- Users are currently limited to one picture on each post. Additionally they have no control over the size or postion of the image.

## API Documentation

This API allows you to interact with a travel blog platform, where you can read and write blogs, manage authors, and interact with comments. The API uses JSON for request bodies.

### Base URL

The base URL for accessing the Travel Blog API is: https://djfancyal.github.io/Travel-Blog/

### Authentication

The API uses JSON Web Token (JWT) for authentication. To access protected endpoints, you need to include a valid JWT token in the request headers.

### Endpoints

#### Home Page

- URL: /
- HTTP Method: GET
- Description: Retrieves the home page of the travel blog.

#### Blogs View

- URL: /blogs/
- HTTP Method: GET
- Description: Retrieves all blog posts available in the travel blog.

#### View Blog

- URL: /blogs/:id
- HTTP Method: GET
- Description: Retrieves a specific blog post identified by the id parameter.

#### Create Blog

- URL: /blogs/
- HTTP Method: POST
- Description: Creates a new blog post.
- Required Fields (Request Body):
  - title: The title of the blog post.
  - author_id: The ID of the author creating the blog post.
  - body: The content of the blog post.
  - pic: An optional picture associated with the blog post.

#### Edit Blog

- URL: /blogs/:id
- HTTP Method: PUT
- Description: Updates an existing blog post identified by the id parameter.
- Request Body: You can include any combination of the following fields to update:
  - title: The updated title of the blog post.
  - author_id: The updated ID of the author.
  - body: The updated content of the blog post.
  - pic: The updated picture associated with the blog post.

#### Delete Blog

- URL: /blogs/:id
- HTTP Method: DELETE
- Description: Deletes the specified blog post identified by the id parameter.

#### Authors View

- URL: /authors/
- HTTP Method: GET
- Description: Retrieves all authors in the travel blog platform.

#### View Author

- URL: /authors/:id
- HTTP Method: GET
- Description: Retrieves the profile of a specific author identified by the id parameter.

#### Create Author

- URL: /authors/
- HTTP Method: POST
- Description: Creates a new author account.
- Required Fields (Request Body):
  = username: The unique username for the author.
  - password: The author's password.
  - confirmPassword: The confirmation of the author's password.

#### Login

- URL: /authors/login
- HTTP Method: POST
- Description: Logs in an existing user.
- Required Fields (Request Body):
  - username: The author's username.
  - password: The author's password.

#### Edit Author

- URL: /authors/:id
- HTTP Method: PUT
- Description: Updates the profile of the author identified by the id parameter.
- Request Body: You can include any combination of the following fields to update:
  - username: The updated username of the author.
  - name: The updated name of the author.
  - password: The updated password of the author.
  - bio: The updated biography of the author.
  - pic: The updated profile picture of the author.

#### Delete Author

- URL: /authors/:id
- HTTP Method: DELETE
- Description: Deletes the author account identified by the id parameter.

#### Create Comment

- URL: /comments/
- HTTP Method: POST
- Description: Creates a new comment for a blog post.
- Required Fields (Request Body):
  - author_id: The ID of the author creating the comment.
  - body: The content of the comment.

#### Delete Comment

- URL: /comments/:id
- HTTP Method: DELETE
- Description: Deletes the specified comment identified by the id parameter.

### Error Handling

The API returns appropriate HTTP status codes and error messages in case of failures. Make sure to handle these errors accordingly.

### Note

This is the initial version of the Travel Blog API documentation. Be sure to check for updates and additional features in future releases.
