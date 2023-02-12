// Import Mongoose
const { Schema, model } = require("mongoose");

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
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        }
    ],
    // friends (array of _id values referencing User)
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ], 
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

module.exports = User;