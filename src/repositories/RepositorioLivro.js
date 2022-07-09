const Livro = require('../models/livros');


const create = async (body) => {
  return await Livro.create(body);
}

// const paginate = async (page) => {
//   return await Vehicle.paginate({}, { page, limit: 10 });
// }

const getLivroDisponivel = async () => {
  return await Livro.find()
}
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
// const findByIdAndUpdate = async (id, body) => {
//   return await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
  // findByIdAndUpdate,
  // findByIdAndRemove
}