const express = require("express");

const router = express();
const db = require("../../ddbb/index");

router.get("/", (req, res) => {
  console.log(">>>>>>>>", req.query);

  var queryStr = `SELECT * FROM dbgspace.recursos;`;
  const query = req.query;
  if (query.keyWord !== "Default") {
    queryStr = `SELECT * FROM dbgspace.recursos WHERE tipo=?;`;
  }
  console.log(queryStr);
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