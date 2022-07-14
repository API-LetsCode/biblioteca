const Livro = require('../models/livros');


const create = async (body) => {
  return await Livro.create(body);
}

const findByName = async (titulo) => {
  return await Livro.findOne({titulo:titulo});
}

const getLivroDisponivel = async () => {
  return await Livro.find()
}

const findByIDAndUpdate = async (id, body) => {
  return await Livro.findOneAndUpdate({_id:id}, body);
}

const findByIdAndRemove = async (id) => {
  return await Livro.findByIdAndRemove(id);
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




module.exports = {
  // setVehicleAvailable,
  // setVehicleBusy,
  getLivroDisponivel,
  // createVehicleAutomatic,
  create,
  // paginate,
  // findById,
  findByIDAndUpdate,
  findByIdAndRemove,
  findByName
}