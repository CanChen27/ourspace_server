const express = require("express");

const router = express();
const db = require("../../ddbb/index");

router.get("/", (req, res) => {
  const queryStr = `SELECT value FROM dbgspace.recursos where value LIKE CONCAT('%', ?,'%');`;

  const query = req.query;
  db.query(queryStr, [query.keyWord], (err, results) => {
    if (err) {
      return res.send({ status: 100, err: err.message });
    }

    if (results.length > 0) {
      return res.send({ status: 200, data: results });
    }

    if (results.length == 0) {
      return res.send({ status: 300 });
    }
  });
});

module.exports = router;
