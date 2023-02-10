// more to come
const mongoose = require("mongoose");

// api/users endpoint - use this after the localhost link

// get all users

app.get("/read", (req, res) => {
  db.collection("users")
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});

// get a single user by its _id and populate thought and friend data

// post a new user

/* example data

{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}

*/

// put to update a user by its _id

// delete to remove a user by its ID (bonus: remove a user's associated thoughts when deleted)

// users/:userId/friends/:friendId

// post to add a friend to a user's friend list

// delete to remove a friend from a user's friend list