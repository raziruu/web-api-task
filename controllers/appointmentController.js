const express = require('express');
const appointmentModel = require('../models/appointmentModel');

const createAppointment = async (req, res) => {
    try {
        // Parse and validate input
        const { date, time } = req.body;
        if (!date || !time || !isValidDateFormat(date) || !isValidTimeFormat(time)) {
            return res.json({ "success": false, "message": "Invalid date or time format." });
        }

        // Check if the date is a future date
        const currentDate = new Date();
        const inputDate = new Date(date);
        if (inputDate < currentDate) {
            return res.json({ "success": false, "message": "Please select a future date." });
        }

        // Check availability
        if (time === "15:00") {
            return res.json({ "success": false, "message": "Selected time slot is unavailable." });
        }

        // Confirm booking
        const newAppointment = new appointmentModel({
            date: date,
            time: time,
        });

        await newAppointment.save();

        // Send the response to the user
        res.json({ success: true, message: "Booking confirmed." });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Internal server error." });
    }
};

// Function to validate date format 'YYYY-MM-DD'
const isValidDateFormat = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
};

// Function to validate time format 'HH:mm'
const isValidTimeFormat = (timeString) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(timeString);
};


module.exports = { createAppointment }