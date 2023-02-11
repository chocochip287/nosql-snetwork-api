// Import Mongoose
const { Schema, model, Types } = require("mongoose");
// Import Moment
const moment = require("moment");

// date format function/getter - may omit in favor of moment for time's sake

function dateFormat(createdAt) {
    // more big brain things to come
    console.log(createdAt);
};

// reactionSchema

const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    // createdAt needs a getter method to format the date
    createdAt: { type: Date, default: moment().format('MMMM Do YYYY, h:mm:ss a') }
});

// Thought schema

const thoughtSchema = new Schema({
    
        //thoughtText (string, required, must be between 1-280 characters)
        thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
        // createdAt (date, set default value to current timestamp)
        // createdAt needs getter method to format timestamp
        createdAt: { type: Date, default: moment().format('MMMM Do YYYY, h:mm:ss a') },
        // username (the user that created this thoght; string, required
        username: { type: String, required: true },
        // reactions (these are like replies; array of nested documents created with the reactionSchema)
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual to retrieve length of thought's reactions
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// thought model

const Thought = model("Thought", thoughtSchema);

// error handler

const handleError = (err) => console.error(err);

module.exports = { Thought };