const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const cadastroModel = require('./modules/cadastroLivvro/cadastro.model');
const updateModel = require('./modules/update/update.model');
const deleteModel = require('./modules/delete/delete.model');



app.listen(3000, () => {
  console.log('Server is running on port 3000'); // listen for requests
});


app.get('/livros', async (req, res) => {
  try {
    const response = await cadastroModel.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).alert(error.message);
  }
 
});

app.post('/livros/cadastro', async (req, res) => {
  
  try {
    const livroExistente = await cadastroModel.findOne({ id: req.body.id || 0});
    if (!req.body) return res.status(400).json('Body is required');
    if (livroExistente) return res.status(400).json('Livro já cadastrado');
  

    const  novoLivro = new cadastroModel({
      id: req.body.id,
      titulo: req.body.titulo,
      Num_paginas: req.body.Num_paginas,
      isbn: req.body.isbn,
      editora: req.body.editora
    });

    await novoLivro.save();
   

    res.status(201).json(novoLivro);

  } catch (error) {

    res.status(500).json(error.message);
  }
 
});

app.put('/livros/:id', async (req, res) => {

  try {
    const { id } = req.params;
    const { titulo, Num_paginas, isbn, editora } = req.body;

    if (!req.body) return res.status(400).json('Body is required');

    const response = await cadastroModel.findOneAndUpdate({ id: id }, { titulo, Num_paginas, isbn, editora });

    res.status(200).json(response);

  } catch (error) {
    res.status(500).json(error.message);
  }
 
});

app.delete('/livros/:id', async (req, res) => {

  try {
    const { id } = req.params;

    const response = await cadastroModel.findOneAndDelete({ id: id });
    
    if (!response) return res.status(404).json('Livro não encontrado');

    res.status(200).json(`deletado com sucesso`);
  } catch (error) {
    res.status(500).json(error.message);
  }

 
});

