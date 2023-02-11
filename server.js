// Imports express
const express = require("express");
// Imports routes
const routes = require("./routes");
// Imports connection
const db = require("./config/connection");
// Imports models
const User = require("./models/User");
const Thought = require("./models/Thought");
// Imports seeds
const userData = require("./utils/userSeed");
const thoughtData = require("./utils/thoughtSeed");

const app = express();
const PORT = 6505;

// middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

// Connection string for local MongoDB instance, referencing ./config/connection.js

db.once("open", async () => {
    // Clear any existing users
    await User.deleteMany({});
    // Clear any existing thoughts 
    await Thought.deleteMany({});
    // Seed user default data
    await User.insertMany(userData);
    // Seed thought default data
    await Thought.insertMany(thoughtData);


    app.listen(PORT, () => {
        console.log(`API server is listening on port ${PORT}.`);
    })
})