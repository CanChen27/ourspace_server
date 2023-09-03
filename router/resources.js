const express = require("express");
const multer = require('multer');
const path = require('path');


const router = express();
const db = require("../ddbb/index"); 
const resources_handler = require('../router_handler/resources');


router.get("/", (req, res) => {
  console.log("cchen>> resources-usuarios")
  const queryStr = `select * from ofertas o join arrendadores a on o.idArrendador = a.idArrendador`;
  // const queryStr = `select * from usuarios`;
  db.query(queryStr, (err, results) => {
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

router.get("/filterTipo", (req, res) => {
  // console.log(">>>req.param", req);

  idTipo = req.query.tipo;
  console.log("filterTipo", idTipo);  
  var queryStr = `select * 
                  from ofertas 
                  where idTipo=?;`; 
  db.query(queryStr, idTipo, (err, results) => {
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

router.get("/filterPeriodo", (req, res) => {
  // console.log(">>>req.param", req);

  idTipo = req.query.tipo;
  console.log("filterTipo", idTipo);  
  var queryStr = `select * 
                  from ofertas 
                  where plazoOferta=?;`; 
  db.query(queryStr, idTipo, (err, results) => {
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

router.get("/listaCompartir", (req, res) => {
  // console.log(">>>req.param", req);

  idTipo = req.query.tipo;
  console.log("filterTipo", idTipo);  
  var queryStr = `select * 
                  from reservas r join ofertas o on r.idOferta=o.idOfertas
                  where compartir='Buscar gente';`; 
  db.query(queryStr, idTipo, (err, results) => {
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

router.get("/comentarios", resources_handler.comentarios);

const storage = multer.diskStorage({
  destination: '/home/can/Desktop/img/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post("/img",upload.single('img'), (req, res) => {

  if (!req.file) {
    return res.status(400).send('No se ha cargado ningún archivo');
  }
  res.send(`Archivo ${req.file.originalname} cargado correctamente`);


  // const queryStr = `SELECT value FROM dbgspace.recursos where value LIKE CONCAT('%', ?,'%');`;

  // const formData = req.body.id.get("img");
  // console.log(formData);
 
  // for(let [name, value] of req.body) {
  //   console.log(`${name} = ${value}`); // key1 = value1, luego key2 = value2
  // }

  // fs.writeFile("/home/can/Desktop/img", book.id, (err) => {
  //   console.error(err)
  // })
});



module.exports = router;
