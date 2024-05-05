const userModel = require('../models/userModel')


// async and await is used retrieve data from the server
const createUser = async (req, res) => {
    // Wrting steps to follow 

    // 1. Check incomming data 
    console.log(req.body);

    // 2. Destructure the incomming data
    const { name, phone, email } = req.body;

    // 3. Valdiate the data (If empty, stop the process and send an error response)
    if (!name || !phone || !email) {
        // res.send("Please enter in all the fields");
        return res.json({
            "sucess": false,
            "message": "Please enter all the fields!!"
        });
    }

    // 4. Error handling (Try Catch)
    try {
        // 5. Check if the user is already registered
        const existingUser = await userModel.findOne({
            phone: phone
        });
        // 5.1. If user found: Send response user already exist
        // 5.1.1. Stop the process
        if (existingUser) {
            // return is used to end the process
            return res.json({
                "status": false,
                "message": "User already exists!!!"
            })
        }


        // 5.2. If user is new
        const newUser = new userModel({
            // Database Fields : Client's Value
            name: name,
            phone: phone,
            email: email,
        })
        // 5.3. Save to the database
        await newUser.save();

        // 5.4. Send the response to the user
        res.json({
            "sucess": true,
            "message": "User created sucessfully"
        });

    } catch (error) {
        console.log(error);
        res.json({
            "success": "false",
            "message": "Internal serval error"
        })
    }
}

module.exports = { createUser }
