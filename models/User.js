// more to come

// Import Mongoose
const mongoose = require("mongoose");

// username (string, unique, required, trimmed)

// email (string, required, unique, must match a valid email address (look into Mongoose's matching validation))

// thoughts (array of _id values referencing the Thought model)

// friends (array of _id values referencing the User model (self-reference))

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, 
        validate: {
            // email validator that simply looks to see that the provided email is one or more of any character @ one or more of any characters . one or more of any number of characters. Not very specific or sophisticated but does the job.
            validator: function(v) {
                return /^.+@.+\..+$/.test(v);
            },
            message: newUser => `${newUser.email} is not a valid email address.`
        },
    },
    // thoughts,
    
    // friends,
    
});