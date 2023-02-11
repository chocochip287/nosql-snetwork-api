const router = require("express").Router();
const {
    testController
} = require("../../controllers/userController");

// "users" endpoint

router.route("/").get(testController);

module.exports = router;

