// Import Mongoose
const { Schema, model } = require("mongoose");

// Friends subdocument

const friendSchema = new Schema({
    name: {type: String, required: true }
});

// Schema for User model

const userSchema = new Schema({
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
    thoughts: [thoughtSchema],
    // friends (array of _id values referencing User)
    friends: [friendSchema], 
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual to retrieve friend count
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// building a model based on userSchema
const User = model("User", userSchema);

// error handler
const handleError = (err) => console.error(err);

module.exports = User;