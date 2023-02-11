const router = require("express").Router();
const thoughtRoutes = require("./thoughtsRoutes");
const userRoutes = require("./userRoutes");

// api/users/..
router.use("/users", userRoutes);
// api/thoughts/..
router.use("/thoughts", thoughtRoutes);

module.exports = router;