# ProShop (MERN stack)
An eCommerce website that sells electronic products for cheap. Integrated with PayPal API.

## Live Demo
* Click on this link [here](https://proshop-site.herokuapp.com/)
* Admin Account (admin@user.com, password123)
## Prerequisites
* Account in MongoDB (For storing the user data) https://www.mongodb.com
* Account in PayPal (for sandbox account)
## Key Features
* PayPal / credit card integration
* Full featured Shopping Cart
* Product Search Feature
* Pagination
* Admin Product Management
* Admin User Management
* Admin can mark orders as delivered
* Database seeder (products & users)
## Installation
* Download the project
* Create a .env file in the root project folder and add the following
```
    NODE_ENV = development
    PORT = 5000

    MONGO_URI = Your Mongodb URI
    JWT_SECRET = typeinyourownsecret

    PAYPAL_CLIENT_ID = Your PayPal Client ID
```
* Install Dependencies (inside frontend & backend folders)
```
    npm install
    cd frontend
    npm install
```
* Run the app (from root)
```
    # Runs frontend (:3000) & backend (:5000)
    npm run dev
    
    # Run backend only
    npm run server
```
## Build & Deploy
```
    # Create frontend prod build
    cd frontend
    npm run build
```
There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku
## Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data
```
    # Import data
    npm run data:import
    
    # Destroy data
    npm run data:destroy

```
## Technologies Used
* **Front End**: React, React-Bootstrap, Redux
* **Back End**: NodeJS, ExpressJS, MongoDB, Mongoose, Bcrypt.js, JWT

## Author
* Rchi Lugtu
## Future Scope
* Save images to cloudinary!
