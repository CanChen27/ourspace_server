const express = require('express');

const router = express();
const multer = require('multer');

const admin_handler = require('../router_handler/admin');
const storage = multer.diskStorage({
    destination: '/home/can/Desktop/img/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

//personal data
router.get('/misProductos', admin_handler.misProductos);
router.post('/crearProducto', upload.array('imagenes'), admin_handler.crearProducto);
router.post('/eliminarProducto', admin_handler.eliminarProducto);
router.post('/modificarProducto', admin_handler.modificarProducto);

router.get('/getNormas', admin_handler.getNormas);
 
router.post('/publicarComentario', admin_handler.publicarComentario);


module.exports = router;
