const router = require("express").Router();
const {
    testController
} = require("../../controllers/userController");

// /api/users endpoint

router.route("/").get(testController);

module.exports = router;

