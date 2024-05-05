const express = require('express');
const router = express.Router();
const { obtenerGruposChampions2009, obtenerEquiposChampions2009, actualizarEquipo, crearEquipo, eliminarEquipo }= require('./controllers');


// Rutas para obtener la distribución de grupos, la lista de equipos, y equipos por país
router.get('/grupos', obtenerGruposChampions2009);
router.get('/equipos', obtenerEquiposChampions2009);
router.put('/equipos/:id', actualizarEquipo);
router.post('/equipos', crearEquipo);
router.delete('/equipos/:id', eliminarEquipo);



module.exports = router;
