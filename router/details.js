const express = require("express");

const router = express();
const db = require("../ddbb/index");

router.get("/titleInfo", (req, res) => {
  const queryStr = `SELECT caracteristica as carac
  FROM dbgspace.recursos R JOIN dbgspace.caracteristicas C ON R.id_recurso = C.id_recurso
  WHERE C.id_recurso=?`;
  const query = req.query;

  db.query(queryStr, [query.keyWord], (err, results) => {
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

router.get("/carousel", (req, res) => {
  const queryStr = `SELECT *
  FROM dbgspace.arrendador`;
  const query = req.query;

  db.query(queryStr, [query.keyWord], (err, results) => {
    if (err) {
      return res.cc(err);
    }

    if (results.length > 0) {
      return res.cc({ status: 500, data: "No esta implementado" });
    }

    if (results.length == 0) {
      return res.cc("No se han encontrado coincidencias, intentelo de nuevo");
    }
  });
});

router.get("/desc", (req, res) => {
  const queryStr = `SELECT caracteristica as carac
  FROM dbgspace.recursos R JOIN dbgspace.caracteristicas C ON R.id_recurso = C.id_recurso
  WHERE C.id_recurso=?`;
  const query = req.query;

  db.query(queryStr, [query.keyWord], (err, results) => {
    if (err) {
      return res.cc(err);
    }

    if (results.length > 0) {
      return res.cc({ status: 500, data: "No esta implementado" });
    }

    if (results.length == 0) {
      return res.cc("No se han encontrado coincidencias, intentelo de nuevo");
    }
  });
});

router.get("/info", (req, res) => {
  const queryStr = `SELECT info
  FROM dbgspace.recursos R JOIN dbgspace.information I ON R.id_recurso = I.resource_id
  WHERE R.id_recurso=?`;
  const query = req.query;

  db.query(queryStr, [query.keyWord], (err, results) => {
    if (err) {
      return res.cc(err);
    }

    if (results.length > 0) {
      return res.send({ status: 200, data: results });
    }

    if (results.length == 0) {
      return res.cc("No se han encontrado coincidencias, intentelo de nuevo");
    }
  });
});

router.get("/politics", (req, res) => {
  const queryStr = `SELECT politics_info
  FROM dbgspace.recursos R JOIN dbgspace.politics P ON R.id_recurso = P.resource_id
  WHERE R.id_recurso=?`;
  const query = req.query;

  db.query(queryStr, [query.keyWord], (err, results) => {
    if (err) {
      return res.cc(err);
    }

    if (results.length > 0) {
      return res.send({ status: 200, data: results });
    }

    if (results.length == 0) {
      return res.cc("No se han encontrado coincidencias, intentelo de nuevo");
    }
  });
});

router.get("/facilities", (req, res) => {
  const queryStr = `SELECT facilities_info
  FROM dbgspace.recursos R JOIN dbgspace.facilities F ON R.id_recurso = F.resource_id
  WHERE R.id_recurso=?`;
  const query = req.query;

  db.query(queryStr, [query.keyWord], (err, results) => {
    if (err) {
      return res.cc(err);
    }

    if (results.length > 0) {
      return res.send({ status: 200, data: results });
    }

    if (results.length == 0) {
      return res.cc("No se han encontrado coincidencias, intentelo de nuevo");
    }
  });
});

// const mysql = require("mysql"); // or use import if you use TS
// const util = require("util");
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "dbgspace",
// });

// const conn = db.getConnection();

// // node native promisify
// const query = util.promisify(conn.query).bind(conn);
// (async () => {
//   var infoQuery;
//   var resQuery;
//   var faciQuery;
//   try {
//     infoQuery = await query("SELECT * FROM dbgspace.information;");
//     resQuery = await query("SELECT * FROM dbgspace.resource_politics;");
//     faciQuery = await query("SELECT * FROM dbgspace.facilities;");
//   } finally {
//     res.cc({
//       status: 200,
//       data: {
//         info: infoQuery,
//         resource_politics: resQuery,
//         facilites: faciQuery,
//       },
//     });
//     conn.end();
//   }
// })();

module.exports = router;
