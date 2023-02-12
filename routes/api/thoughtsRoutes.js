const router = require("express").Router();
const {
    testController,
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought
} = require("../../controllers/thoughtsController");

// /api/thoughts endpoint

// test route
router.route("/testytest").get(testController);

// get all thoughts, /api/thoughts/all

router.route("/all").get(getAllThoughts);

// get one thought, /api/thoughts/:id | update one thought, /api/thoughts/:id, { "thoughtText": "new thought text"} in body | delete one thought, /api/users/:id
router.route("/:id").get(getOneThought).put(updateThought).delete(deleteThought);

// create new user, /api/users/add
router.route("/add").post(createThought);

module.exports = router;

