const express = require("express");

const router = express();
const db = require("../ddbb/index");

router.get("/", (req, res) => {
  const queryStr = `select * from recursos`;
  db.query(queryStr, (err, results) => {
    if (err) {
      return res.cc(err);
    }

    if (results.length > 0) {
      return res.cc({ status: 200, data: results });
    }

    if (results.length == 0) {
      return res.cc("No se han encontrado coincidencias, intentelo de nuevo");
    }
  });
});

router.get("/search", (req, res) => {
  const queryStr = `SELECT value FROM dbgspace.recursos where value LIKE CONCAT('%', ?,'%');`;

  const query = req.query;
  db.query(queryStr, [query.keyWord], (err, results) => {
    if (err) {
      return res.cc(err);
    }

    if (results.length > 0) {
      return res.cc({ status: 200, data: results });
    }

    if (results.length == 0) {
      return res.cc({ status: 300 });
    }
  });
});

router.get("/filter", (req, res) => {
  console.log(">>>>>>>>", req.query);

  var queryStr = `SELECT * FROM dbgspace.recursos;`;
  const query = req.query;
  if (query.keyWord !== "Default") {
    queryStr = `SELECT * FROM dbgspace.recursos WHERE tipo=?;`;
  }
  console.log(queryStr);
  db.query(queryStr, [query.keyWord], (err, results) => {
    if (err) {
      return res.cc(err);
    }

    if (results.length > 0) {
      return res.cc({ status: 200, data: results });
    }

    if (results.length == 0) {
      return res.cc({ status: 300 });
    }
  });
});

module.exports = router;
