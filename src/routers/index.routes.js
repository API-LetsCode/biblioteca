// const express = require('express');
// const routes = express.Router();

// routes.use('/livro', (req, res) => res.json({ message: 'Funcionando!' }));


// module.exports = routes;


// nao sei qual a forma certa, a de cima ou a de baixo

const livroRoutes = require('./livro.routes')
const express = require('express');
const routes = express.Router();


routes.use('/livro', livroRoutes);


module.exports = routes;