const express = require("express");
const router = express.Router();
const banners = require("../data/banners.json");

// GET all banners
router.get("/", (req, res) => {
  res.json(banners);
});

module.exports = router;
