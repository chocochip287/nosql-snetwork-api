// Import Mongoose
const { Schema, model, Types } = require("mongoose");

// Friends subdocument - may not need this as I think the intent is for the friends post route to update that array on its own.

const friendSchema = new Schema({
    name: { type: String, required: true }
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

// error handler
const handleError = (err) => console.error(err);

module.exports = User;