const express = require("express");

const router = express();

const db = require("../../ddbb/index");

const jwt = require("jsonwebtoken");
const config = require("../../config");

router.post("/login", (req, res) => {
  const queryStr = `SELECT * FROM usuarios WHERE id_usuario = ? AND contrasena = ?`;
  const userInfo = req.body;
  db.query(queryStr, [userInfo.id, userInfo.contrasena], (err, results) => {
    if (err) {
      return res.send({ status: 100, message: err.message });
    }

    if (results.length == 0) {
      return res.send({
        status: 300,
        nickname: "Datos incorrectos, intentelo de nuevo",
      });
    }

    // const user = {...results[0], password: '', user_pic: ''};
    // console.log(results);
    const user = { ...results[0] };
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn,
    });
    res.send({
      status: 200,
      message: "exito",
      token: "Bearer " + tokenStr,
    });
    // console.log(tokenStr);
  });
});

router.post("/register", (req, res) => {
  const queryStr = `SELECT * FROM usuarios WHERE id_usuario = ?`;
  const userInfo = req.body;
  db.query(queryStr, [userInfo.id], (err, results) => {
    if (err) {
      return res.send({ status: 100, message: err.message });
    }

    if (results.length > 0) {
      return res.send({
        status: 300,
        nickname: "El nombre usuario ya existe intente introducir otro",
      });
    }

    // const user = {...results[0], password: '', user_pic: ''};
    // console.log(results);
    const sql = `INSERT INTO usuarios SET ?`;
    // console.log(userInfo);
    db.query(sql, { ...userInfo }, (err, results) => {
      if (err) {
        return res.send({ status: 100, message: err.message });
      }

      if (results.affectedRows !== 1) {
        return res.send({
          status: 1,
          message: "La operación a fallado intentelo de nuevo",
        });
      }

      const user = { ...userInfo };
      const tokenStr = jwt.sign(user, config.jwtSecretKey, {
        expiresIn: config.expiresIn,
      });
      res.send({
        status: 200,
        message: "exito",
        token: "Bearer " + tokenStr,
      });
    });

    // console.log(tokenStr);
  });
});

module.exports = router;
