const express = require("express");
const multer = require('multer');
const path = require('path');


const router = express();
const db = require("../ddbb/index"); 

router.get("/", (req, res) => {
  console.log("cchen>> resources-usuarios")
  const queryStr = `select * from ofertas`;
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

router.get("/filter", (req, res) => {
  // console.log(">>>req.param", req);

  console.log(">>>req.param", req.param);
  console.log(">>>req.query", req.query);
  var param = req.query;
  var queryStr = `select * 
                  from ourspace.ofertas R join ourspace.tipoofertas T on R.idTipo = T.id
                  where R.idTipo=?;`;
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
