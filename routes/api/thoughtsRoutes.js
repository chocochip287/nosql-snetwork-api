const router = require("express").Router();
const {
    testController
} = require("../../controllers/thoughtsController");

// /api/thoughts endpoint

// test route
router.route("/testytest").get(testController);

module.exports = router;

