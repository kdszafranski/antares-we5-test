var router = require('express').Router();

var listings = [
  {data: "info1"},
  {data: "info2"},
  {data: "info3"}
]

router.get("/", function(req, res) {
  res.send(listings);
});

module.exports = router;
