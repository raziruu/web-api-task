const router = require('express').Router();
const userController = require('../controllers/userControllers');



// Creating user registration route
router.post('/users', userController.createUser)


// Exporting
module.exports = router;
