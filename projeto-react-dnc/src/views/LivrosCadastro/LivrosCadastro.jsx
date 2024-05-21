'use client'
import {useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import axios from 'axios'




const LivrosCadastro = () => {
  
  const [livro, setLivro] = useState({
    id: '',
    titulo: '',
    num_paginas: '',
    isbn: '',
    editora: ''
  });

  async function createLivro(e){
    e.preventDefault()

    try {
      axios.post('http://localhost:3000/livros/cadastro', livro);
      alert('Livro cadastrado com sucesso');
    } catch (error) {
      alert('Erro ao cadastrar livro');
    }

    if(livro.id!=undefined && livro.id!='' && livro.titulo!=undefined && livro.titulo!='' && livro.num_paginas!=undefined && livro.num_paginas!='' && livro.isbn !=undefined && livro.isbn !='' && livro.editora !=undefined && livro.editora !=''){
      alert('Livro cadastrado com sucesso');
    } else {
      error('Erro ao cadastrar livro');
    }

    console.log('Dados do Livro', livro)
        
    setLivro({
      id: '',
      titulo: '',
      num_paginas: '',
      isbn: '',
      editora: ''
    });

  }

  const handleChanges = (e) => {
    setLivro({
      ...livro,
      [e.target.name]: e.target.value
    });
  }

  return (
  <>
    <Header/>    
      <div className='livrosCadastro' onSubmit={createLivro}>
        <h1>Cadastro de Livros</h1>
        <div>          
          <form id="formulario">
          <div className='form-group'>
            <label>Id</label>
            <input
             type="text"
            id='id'
            name='id'
            required onChange={handleChanges}
            value={livro.id}
            ></input>
          </div>
          <div className='form-group'>
            <label>Titulo</label>
            <input
            type="text"
            id='titulo'
            name='titulo'
            required onChange={handleChanges}
            value={livro.titulo}  
            ></input>
          </div>
          <div className='form-group'>
            <label>Número de Páginas</label>
            <input type="text"
            id='num'
            required onChange={handleChanges}
            name='num_paginas'
            value={livro.num_paginas}
            ></input>
          </div>
          <div className='form-group'>
            <label>ISBN</label>
            <input type="text"
            id='isbn'
            required onChange={handleChanges}
            name='isbn'
            value={livro.isbn}
            ></input>
          </div>
          <div className='form-group'>
            <label>Editora</label>
            <input type="text"
            id='editora'
            onChange={handleChanges}
            name='editora'
            value={livro.editora}
            ></input>
          </div> 
          <div className='form-group'>
            <button type='submit'>Cadastrar Livro</button>  
          </div>         
          </form>
        </div>
    </div>
  </>)
  
}

export default LivrosCadastro