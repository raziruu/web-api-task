const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController')


// Creating user registration route
router.post('/book-appointment', appointmentController.createAppointment)

// Exporting
module.exports = router;
