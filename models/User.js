// more to come

// Import Mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, validate: {
        // email validator
        validator: function(v) {
            return /^[-A-Za-z0-9._]+@[-A-Za-z0-9._]+\.[-A-Za-z0-9._]+$/.test(v);
            },
            message: newUser => `${newUser.email} is not a valid email address.`
        },
    },
    // thoughts,
    
    // friends,
    
});

// building a model based on userSchema
const User = mongoose.model("User", userSchema);

// error handler

const handleError = (err) => console.error(err);

module.exports = User;