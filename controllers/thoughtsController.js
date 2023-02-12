// model import
const Thought = require("../models/Thought");

module.exports = {
  // route functionality tester
  testController(req, res) {
    res.send("Hey, you made it!");
  },
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // get a single thought by its _id - remember that ids change due to reseeding on server launch
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.id})
      .select("-__v")
      .then((thisThought) =>
        !thisThought ? res.status(404).json({ message: `No thought with the provided ID exists.`}) : res.json(thisThought)
      )
      .catch((err) => res.status(500).json(err))
  },
  // post to create a new thought, e.g. { "thoughtText": "This is my thought", "username": "beepboop", "userId": "whatever the user's ID is" }
  createThought(req, res) {
    Thought.create(req.body)
      .then((newThought) => res.json(newThought))
      .catch((err) => res.status(500).json(err));
  },
  // put to update a thought by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    )
    .then((updatedThought) => res.json(updatedThought))
    .catch((err) => res.status(500).json(err));
  },
  // delete to remove a thought by its _id
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
    .then(res.json(`The thought with ID ${req.params.id} has been deleted.`))
    .catch((err) => res.status(500).json(err))
  }
  // :thoughtId/reactions
  // post to create a reaction stored in a single thought's reactions array field

  // delete to pull and remove a reaction by the reaction's reactionId value

}

