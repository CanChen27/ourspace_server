const express = require('express');

const router = express();

const reservas_handler = require('../router_handler/reservas');


//personal data
router.post('/newReserva', reservas_handler.newReserva);
router.get('/misReservas', reservas_handler.misReservas);
router.post('/modificarReserva', reservas_handler.modificarReserva);
router.post('/cancelarReserva', reservas_handler.cancelarReserva); 



module.exports = router;
