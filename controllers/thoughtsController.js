// more to come

// more to come - going to completely redo routes and controllers to mimic the structure shown in the lessons

module.exports = {
  // route functionality tester
  testController(req, res) {
    res.send("Hey, you made it!");
  }
}

// get all thoughts

// get a single thought by its _id

// post to create a new thought

/* example data

{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}

*/

// put to update a thought by its _id

// delete to remove a thought by its _id

// :thoughtId/reactions

// post to create a reaction stored in a single thought's reactions array field

// delete to pull and remove a reaction by the reaction's reactionId value