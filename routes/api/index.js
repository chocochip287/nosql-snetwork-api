const router = require("express").Router();
//const thoughtRoutes = require("./thoughtsRoutes");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);
// router.use("/thoughts", thoughtRoutes);

module.exports = router;