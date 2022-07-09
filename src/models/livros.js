//Criando o Schema

const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');


const LivroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  editora: {
    type: String,
    required: true
  },
  quantidadeDisponivel: {
    type: Number,
    required: true
  },
  quantidadeACadastrar: {
    type: Number,
    required: true
  },
  edicao:{
    type: Number,
    required: false
  },
  numPags: {
    type: Number,
    required: false
  },
  lancamento:{
    type: String,
    required: false
  }
});

// Registrando o mongoose paginate da Aplicação
// LivroSchema.plugin(mongoosePaginate);

// Registrando o schema
module.exports = mongoose.model('Livro', LivroSchema);