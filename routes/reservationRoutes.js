const router = require('express').Router();
const reservationController = require('../controllers/reservationContoller')



// Creating user registration route
router.post('/reservations', reservationController.createReservation)


// Exporting
module.exports = router;
