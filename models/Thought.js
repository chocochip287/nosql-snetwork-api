// more to come

// thoughtText (string, required, must be between 1-280 characters)

// createdAt (date, set default value to current timestamp, user a getter method to format the timestamp on query)

// username (the user that created this thoght; string, required

// reactions (these are like replies; array of nested documents created with the reactionSchema)

/*

Schema Settings

Create a virtual called reactionCount that retrieves the length of the thought's reactions array on field query.

*/