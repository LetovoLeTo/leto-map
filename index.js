const express = require("express");
const { join } = require("path");

const router = express.Router();

router.use("/map", express.static(join(__dirname, "html")));
router.get("/map", (req, res) => {
    res.sendFile(join(__dirname, "html/index.html"));
});

module.exports = router;