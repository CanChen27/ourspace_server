const express = require("express");

const router = express();
const db = require("../../ddbb/index");

router.get("/", (req, res) => {
  const queryStr = `SELECT C.caracteristica AS descripcion
  FROM dbgspace.arrendador A
  JOIN dbgspace.recursos R ON A.id_recurso = R.id_recurso
  JOIN dbgspace.caracteristicas C ON A.id_recurso = C.id_recurso
  WHERE A.id_recurso=?`;

  // const queryStr = `SELECT CONCAT("[",GROUP_CONCAT(C.caracteristica SEPARATOR ','), "]") AS descripcion
  // FROM dbgspace.arrendador A
  // JOIN dbgspace.recursos R ON A.id_recurso = R.id_recurso
  // JOIN dbgspace.caracteristicas C ON A.id_recurso = C.id_recurso`;

  const query = req.query;
  db.query(queryStr, [query.keyWord], (err, results) => {
    if (err) {
      return res.send({ status: 100, err: err.message });
    }

    if (results.length > 0) {
      console.log(results);
      return res.send({ status: 200, data: results });
    }

    if (results.length == 0) {
      return res.send({ status: 300 });
    }
  });
});

module.exports = router;
