// more to come
// Imports express
const express = require("express");
// Imports mongodb
const mongodb = require("mongodb").MongoClient;
// Imports ObjectID() function
const ObjectId = require("mongodb").ObjectId;

const app = express();
const PORT = 6505;

// Connection string for local MongoDB instance

const connectionStringURI = "mongodb://127.0.0.1:27017/snetworkDB";

// Connection variable

let db;

// Connection to MongoDB instance

mongodb.connect(connectionStringURI, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        // use client.db() constructor to add a new DB instance
        db = client.db();
        app.listen(PORT, () => {
            console.log(`Listening at http://localhost:${PORT}`);
        });
    }
);

app.use(express.json());