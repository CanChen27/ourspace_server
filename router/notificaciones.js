const express = require('express');

const router = express();

const notificaciones_handler = require('../router_handler/notificaciones');


//personal data
router.get('/misNotificaciones', notificaciones_handler.misNotificaciones); 



module.exports = router;
