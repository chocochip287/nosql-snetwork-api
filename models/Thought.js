// Import Mongoose
const { Schema, model, Types } = require("mongoose");
// Import Moment
const moment = require("moment");

// reactionSchema

const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    // set as string instead of Date
    createdAt: { type: String, default: moment().format('MMMM Do YYYY') }
});

// Thought schema

const thoughtSchema = new Schema({
    //thoughtText (string, required, must be between 1-280 characters)
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    // createdAt (date, set as string using moment.js for time's sake)
    createdAt: { type: String, default: moment().format('MMMM Do YYYY') },
    // username (the user that created this thoght; string, required)
    username: { type: String, required: true },
    // reactions (these are like replies; array of nested documents created with the reactionSchema)
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
    },
    id: true,
});

// virtual to retrieve length of thought's reactions
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// thought model

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;