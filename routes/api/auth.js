const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Sevrer Error");
  }
});

module.exports = router;
