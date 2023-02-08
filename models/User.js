// more to come

// username (string, unique, required, trimmed)

// email (string, required, unique, must match a valid email address (look into Mongoose's matching validation))

// thoughts (array of _id values referencing the Thought model)

// friends (array of _id values referencing the User model (self-reference))