var express = require("express");
var router = express.Router();

var gameController = require('../controllers/gameController');

router.get("/", function(req, res, next) {
  res.render("index");
});

router.post("/restart", gameController.restart);
router.post("/draw", gameController.draw)



module.exports = router;
