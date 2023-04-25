const express = require("express");

const router = express();
const db = require("../ddbb/index");

router.get("/", (req, res) => {
  const queryStr = `select * from recurso`;
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

router.get("/filter", (req, res) => {
  // console.log(">>>req.param", req);

  console.log(">>>req.param", req.param);
  console.log(">>>req.query", req.query);
  var param = req.query;
  var queryStr = `select * 
                  from my_db_01.recurso R join my_db_01.tipo_recurso T on R.tipo = T.id_tipo_recurso
                  where tipo=?;`;
  console.log(">>>queryStr",param.type);
  db.query(queryStr, param.type, (err, results) => {
    if (err) {
      return res.cc(err);
    }
    console.log(">>>results length", results.length)
    if (results.length > 0) {
      return res.cc({ status: 200, data: results });
    }

    if (results.length == 0) {
      return res.cc({ status: 300 });
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

module.exports = router;
