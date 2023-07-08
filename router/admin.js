const express = require('express');

const router = express();

const admin_handler = require('../router_handler/admin');


//personal data
router.get('/misProductos', admin_handler.misProductos);
router.post('/crearProducto', admin_handler.crearProducto);
router.post('/eliminarProducto', admin_handler.eliminarProducto);
router.post('/modificarProducto', admin_handler.modificarProducto);



module.exports = router;
