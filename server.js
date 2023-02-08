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

const app = express();
const PORT = 6505;

// Connection string for local MongoDB instance

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server is listening on port ${PORT}.`);
    })
})

app.use(express.json());