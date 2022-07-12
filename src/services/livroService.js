const RepositorioLivro = require('../repositories/RepositorioLivro');


const cadastrar = async (body) => {
    try {
      console.log("estou na service")
      const livros = await RepositorioLivro.create(body);
      if (!livros) {
        return {
          statusCode: 404,
          data: 'Livro já cadastrado na base'
        }
      }
      return {
        statusCode: 200,
        data: livros
      }
    }
    catch (error) {
      return {
        statusCode: 500,
        data: error
      }
    }
  
  };

  const show = async () => {
    try {
      const Livro = await RepositorioLivro.getLivroDisponivel();
      if (!Livro) {
        return {
          statusCode: 404,
          data: 'Nenhum livro encontrado!'
        }
      }
      return {
        statusCode: 200,
        data: Livro
      }
    }
    catch (error) {
      return {
        statusCode: 500,
        data: error
      }
    }
  
  };


  const update = async (id, livroUpdate) => {
    try {
      const livro = await RepositorioLivro.findByIDAndUpdate(id, livroUpdate, { new: true });
      if (!livro) {
        return {
          statusCode: 404,
          data: 'Nenhum livro encontrado!'
        }
      }
      return {
        statusCode: 200,
        data: livro
      }
    }
    catch (error) {
      return {
        statusCode: 500,
        data: error
      }
    }
  
  };




// const index = async (page) => {
//   try {
//     const livros = await RepositorioLivro.paginate(page);
//     if (!livros) {
//       return {
//         statusCode: 404,
//         data: 'Nenhum livro encontrado!'
//       }
//     }
//     return {
//       statusCode: 200,
//       data: livros
//     }
//   }
//   catch (error) {
//     return {
//       statusCode: 500,
//       data: error
//     }
//   }

// };




const destroy = async (id) => {
  try {
    const livro = await RepositorioLivro.findByIdAndRemove(id);
    if (!livro) {
      return {
        statusCode: 404,
        data: 'Livro não encontrado!'
      }
    }


    await RepositorioLivro.findByIdAndRemove(id);


    return {
      statusCode: 200,
      data: 'Livro deletado com sucesso!'
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error
    }
  }

};

module.exports = {
  cadastrar,
  show,
  update,
  destroy
};