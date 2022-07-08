const livroService = require('../services/livroService');


const cadastrar = async (req, res) => {
    console.log("Estou aqui no Livro controller")
    const livro = req.body;
    const response = await livroService.cadastrar(livro);
    return res.status(response.statusCode).json(response.data);
  };



// const index = async (req, res) => {
//   const { page = 1 } = req.query;
//   const response = await vehicleService.index(page);
//   return res.status(response.statusCode).json(response.data);
// };

// const show = async (req, res) => {
//   const id = req.params.id;
//   const response = await vehicleService.show(id);
//   return res.status(response.statusCode).json(response.data);

// };

// const update = async (req, res) => {
//   const id = req.params.id;
//   const vehicle = req.body;
//   const response = await vehicleService.update(id, vehicle);
//   return res.status(response.statusCode).json(response.data);

// };

// const destroy = async (req, res) => {
//   const id = req.params.id;
//   const response = await vehicleService.destroy(id);
//   return res.status(response.statusCode).json(response.data);
// };

module.exports = {
  cadastrar
};