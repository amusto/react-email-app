# Email Survey application built with React and Node
Fullstack React App (Mongo, Express, React, Node)  
Simple fullstack application using React, Redux, Node and Express for server side.  
Using a middleware approach on the Node driven server to manage Google authentication and shopping cart details.

Create a Survey and enter all content then email it to your list. Users receive the email and can respond. All responses are counted and displayed on the Survey list.

Live Demo on Heroku  
http://emailsurveys.musto.io  
Note: When adding credits use the testing credit card number **4242 4242 4242 4242**

Clone and run npm install in root and client directories  
Start Local development in terminal with npm run dev (proxy settings control access to front or backend)

Node server-side 
 * Middleware and routes handle authentication and if user has the required credits.
 * Mongoose Models manage DB interaction
 * Simple Express server code providing backend API structure
 
 React Front-End  
 * /client contains React and Redux elements
 * /reducers combine reducers and handle basic actions
 * /actions contains all actions and associated dispatch calls
