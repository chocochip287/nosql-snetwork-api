// model import
const User = require("../models/User");

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
  // get a single user by its _id - remember that ids change due to reseeding on server launch
  getOneUser(req, res) {
    User.findOne({ _id: req.params.id})
      // this populate shows the full document for any of the selected user's friends
      .populate({ path: "friends" }) //, select: "-__v" 
      .then((thisUser) =>
        !thisUser ? res.status(404).json({ message: `No user with the provided ID.`}) : res.json(thisUser)
      )
      .catch((err) => res.status(500).json(err))
  },
  // post a new user, e.g. { "username": "beepboop", "email": "beepboop@beepmail.com" }
  createUser(req, res) {
    User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(500).json(err));
  },
  // put to update a user by its _id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    )
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => res.status(500).json(err));
  },
  // delete to remove a user by its _id
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
    .then(res.json(`The user with ID ${req.params.id} has been deleted.`))
    .catch((err) => res.status(500).json(err))
  },
  // bonus: remove a user's associated thoughts when deleted

  // :userId/friend/:friendId
  // post to add a new friend to a user's friend list
  friendUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { friends: req.params.friendId }}
    )
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => res.status(500).json(err))
  },
  // delete to remove a friend from a user's friend list
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendId }}
    )
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => res.status(500).json(err))
  }
}