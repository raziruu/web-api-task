const e = require('express');
const reservationModel = require('../models/userReservationModel')


// async and await is used retrieve data from the server
const createReservation = async (req, res) => {
    // Wrting steps to follow 

    // 1. Check incomming data 
    console.log(req.body);

    // 2. Destructure the incomming data
    const { userId, eventDate, numberOfGuest } = req.body;

    // 3. Valdiate the data (If empty, stop the process and send an error response)
    if (!userId || !eventDate || !numberOfGuest) {
        
        return res.json({
            "sucess": false,
            "message": "Please enter all the fields!!"
        });
    } else if (typeof userId !== 'number' || typeof numberOfGuest !== 'number') {
        return res.json({
            "sucess": false,
            "message": "Please enter valid details in the fields!"
        });
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(eventDate)) {
        return res.json({
            "success": false,
            "message": "Please enter a valid date in the format YYYY-MM-DD!!"
        });
    } else if (new Date(eventDate) <= new Date()) {
        return res.json({
            "success": false,
            "message": "Please enter a future date!!"
        });
    } else if (numberOfGuest < 0) {
        return res.json({
            "sucess": false,
            "message": "Please enter valid guest number!!"
        });
    }

    // 4. Error handling (Try Catch)
    try {

        const newReservation = new reservationModel({
            // Database Fields : Client's Value
            userId: userId,
            eventDate: eventDate,
            numberOfGuest: numberOfGuest,
        })
        // 5.3. Save to the database
        await newReservation.save();

        // 5.4. Send the response to the user
        res.json({
            "sucess": true,
            "message": " userId:" + userId + " eventDate:" + eventDate + " numberOfGuests:" + numberOfGuest
        });

    } catch (error) {
        console.log(error);
        res.json({
            "success": "false",
            "message": "Internal serval error"
        })
    }
}

module.exports = { createReservation }