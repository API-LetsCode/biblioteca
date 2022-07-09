const Livro = require('../models/livros');


const create = async (body) => {
  return await Livro.create(body);
}

const getLivroDisponivel = async () => {
  return await Livro.find()
}

const findByTituloAndUpdate = async (titulo, body) => {
  return await Vehicle.findByIdAndUpdate(req.params.titulo, req.body, { new: true });
}


// const paginate = async (page) => {
//   return await Vehicle.paginate({}, { page, limit: 10 });
// }

// const setVehicleBusy = async (vehicle) => {
//   vehicle.status = 'busy'
//   return await Vehicle.findByIdAndUpdate(vehicle._id, vehicle);
// }
// const setVehicleAvailable = async (vehicle) => {
//   vehicle.status = 'available'
//   return await Vehicle.findByIdAndUpdate(vehicle._id, vehicle);
// }
// const findById = async (id) => {
//   return await Vehicle.findById(id);
// }

// const findByIdAndRemove = async (id) => {
//   return await Vehicle.findByIdAndRemove(id);
// }


module.exports = {
  // setVehicleAvailable,
  // setVehicleBusy,
  getLivroDisponivel,
  // createVehicleAutomatic,
  create,
  // paginate,
  // findById,
  findByTituloAndUpdate,
  // findByIdAndRemove
}