const router = require("express").Router();
const {
    testController,
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    friendUser,
    deleteFriend
} = require("../../controllers/userController");

// /api/users endpoint

// test route, /api/users/testytest
router.route("/testytest").get(testController);

// get all users, /api/users/all

router.route("/all").get(getAllUsers);

// get one user, /api/users/:id | update one user, /api/users/:id, { "username": "new username"} in body | delete one user, /api/users/:id
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

// create new user, /api/users/add
router.route("/add").post(createUser);

// add or delete users to/from friends, /api/users/:id/friend/:friendId
router.route("/:id/friend/:friendId").put(friendUser).delete(deleteFriend);


module.exports = router;

