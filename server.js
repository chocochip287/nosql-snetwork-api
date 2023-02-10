// more to come
// Imports express
const express = require("express");
// Imports connection
const db = require("./config/connection");
// Imports mongodb
const mongodb = require("mongodb").MongoClient;
// Imports ObjectID() function
const ObjectId = require("mongodb").ObjectId;
// Model import
// const { Item } = require("./models");
// Routes import
const routes = require("./controllers");

const app = express();
const PORT = 6505;

// middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

// Connection string for local MongoDB instance, referencing ./config/connection.js

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server is listening on port ${PORT}.`);
    })
})