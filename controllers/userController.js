// model import
const { User } = require("../models/User");

module.exports = {
  // route functionality tester
  testController(req, res) {
    res.send("Hey, you made it!");
  },
  // get all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // get a single user by its _id
  getOneUser(req, res) {
    User.findOne({ _id: req.params.id})
      .select("-__v")
      .then((thisUser) =>
        !thisUser ? res.status(404).json({ message: `No user with the provided ID.`}) : res.json(thisUser)
      )
      .catch((err) => res.status(500).json(err))
  }
  // post a new user, e.g. { "username": "beepboop", "email": "beepboop@beepmail.com" }

  // put to update a user by its _id

  // delete to remove a user by its _id

  // bonus: remove a user's associated thoughts when deleted

  // :userId/friends/:friendId
  // post to add a new friend to a user's friend list

  // delete to remove a friend from a user's friend list

}