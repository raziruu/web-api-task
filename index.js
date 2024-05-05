// Importing the packages (Express & Mongoose)
const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./database/database');
// const router = require('./routes/userRoutes')

// Creating an express application
const app = express();

// Express Json Config
app.use(express.json());

// dotenv configuration 
dotenv.config()

// Connecting to database
connectDatabase();

// Defining the port (Node backend port usually run in the range of 5k to 6k)
// Using the port value from .env file
const PORT = process.env.PORT;

// making a test endpoint 
// Endpoints : POST, GET(to ask from the server), PUT(to make changes), DELETE(to delete)
app.get('/test', (req, res) => {
    res.send("Test API is working...")
})
// http://localhost:5000/test


// Configuring routes of User
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/user', require('./routes/reservationRoutes'));
app.use('/api/user', require('./routes/appointmentRoutes'));

// http://localhost:5000/api/user/create

// nodemon package is installed to monitor the server
// Starting the server
app.listen(PORT, () => {
    console.log(`Server in Running on port ${PORT}!!!`);
})


