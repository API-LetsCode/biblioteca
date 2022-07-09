const express = require('express');
const livrosRoutes = express.Router();
// const verifyJWT = require('../middleware/verifyToken');


// importando o controller
const livroController = require('../controllers/livroController');
// routesVehicle.get('', verifyJWT, VehicleController.index);
livrosRoutes.post('', livroController.cadastrar);
// routesVehicle.get('/:id', verifyJWT, VehicleController.show);
// routesVehicle.put('/:id', verifyJWT, VehicleController.update);
// routesVehicle.delete('/:id', verifyJWT, VehicleController.destroy);

module.exports = livrosRoutes;