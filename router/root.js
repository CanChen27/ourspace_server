const express = require('express');

const router = express();

const root_handler = require('../router_handler/root');

router.get('/', root_handler.userInfo);
router.post('/eliminarUsuario', root_handler.eliminarUsuario);
router.post('/aniadirRol', root_handler.aniadirRol);
router.post('/quitarRol', root_handler.quitarRol);

module.exports = router;
