// more to come

// Import Mongoose
const mongoose = require("mongoose");

// Friends subdocument

const friendSchema = new mongoose.Schema({
    name: {type: String, required: true }
})

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
    // thoughts (array of _id values referencing Thought)
    
    // friends (array of _id values referencing User)
    friends: [friendSchema],
    
});

// building a model based on userSchema
const User = mongoose.model("User", userSchema);

// error handler

const handleError = (err) => console.error(err);

module.exports = User;