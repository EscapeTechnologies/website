// DEPENDENCIES
const router = require("express").Router();

// ROUTES
router.get("/", async(req, res) => {
  res.render("pages/index");
});

// EXPORTS
module.exports = router;
