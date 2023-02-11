const router = require("express").Router();
const thoughtRoutes = require("../thoughtsController");
const userRoutes = require("../userController");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;