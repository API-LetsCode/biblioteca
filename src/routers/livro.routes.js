const express = require('express');
const livrosRoutes = express.Router();
// const verifyJWT = require('../middleware/verifyToken');


// importando o controller
const livroController = require('../controllers/livroController');
// routesVehicle.get('', verifyJWT, VehicleController.index);
livrosRoutes.post('', livroController.cadastrar);
livrosRoutes.get('', livroController.show);
livrosRoutes.put('/:id', livroController.update);
livrosRoutes.delete('/:id', livroController.destroy);

module.exports = livrosRoutes;