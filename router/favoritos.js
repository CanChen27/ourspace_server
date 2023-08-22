const express = require('express');

const router = express();

const favoritos_handler = require('../router_handler/favoritos');

router.post('/aniadirFavorito', favoritos_handler.aniadirFavorito);
router.post('/quitarFavorito', favoritos_handler.quitarFavorito);
router.get('/consultarFavorito', favoritos_handler.consultarFavorito);
router.get('/listaFavoritos', favoritos_handler.listaFavoritos);



module.exports = router;
