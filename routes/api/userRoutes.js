const router = require("express").Router();
const {
    testController,
    getAllUsers,
    getOneUser,
    createUser
} = require("../../controllers/userController");

// /api/users endpoint

// test route, /api/users/testytest
router.route("/testytest").get(testController);

// get all users, /api/users/all

router.route("/all").get(getAllUsers);

// get one user, /api/users/:id
router.route("/:id").get(getOneUser);

// create new user, /api/users/add
router.route("/add").post(createUser);

module.exports = router;

