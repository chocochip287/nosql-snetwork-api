const router = require("express").Router();
const {
    testController
} = require("../../controllers/userController");

// /api/users endpoint

// test route
router.route("/testytest").get(testController);

module.exports = router;

