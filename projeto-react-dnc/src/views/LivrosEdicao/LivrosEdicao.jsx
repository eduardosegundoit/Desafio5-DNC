import {useEffect , useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import { useParams } from 'react-router-dom'
import axios from 'axios'



const LivrosEdicao =  () => {  
  let {livroId} = useParams();
  const [livro, setLivro] = useState([]);

  const getLivro = async () => {
    
    try {
      const response = await axios.get(`http://localhost:3000/livros/${livroId}`);
      setLivro(response.data);
    } catch (error) {
      alert('Erro ao buscar livro');
    }

  }

  const editLivro = async (e) => {
    e.preventDefault();

    if (livro.titulo === undefined || livro.titulo === '' || livro.num_paginas === undefined || livro.num_paginas === '' || livro.isbn === undefined || livro.isbn === '' || livro.editora === undefined || livro.editora === '') {
      return alert('Preencha todos os campos');
    } else {

      try {
        await axios.put(`http://localhost:3000/livros/${livroId}`, livro);
        alert('Livro atualizado com sucesso');
      } catch (error) {
        alert('Erro ao atualizar livro');
      }
    }

    useEffect(() => {
    getLivro();
    }, []);
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
      <div className='livrosCadastro' onSubmit={editLivro}>
        <h1>Edição de Livros</h1>
        <div>
          <form id="formulario">
            <div className='form-group'>
              <label>Id</label>
              <input type="text" name="id" value={livroId} onChange={handleChanges} disabled/>
            </div>
            <div className='form-group'>
              <label>Titulo</label>
              <input type="text" name="titulo" value={livro.titulo} onChange={handleChanges} />
            </div>
            <div className='form-group'>
              <label>Num_paginas</label>
              <input type="text" name="num_paginas" value={livro.num_paginas} onChange={handleChanges} />
            </div>
            <div className='form-group'>
              <label>Isbn</label>
              <input type="text" name="isbn" value={livro.isbn} onChange={handleChanges} />
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input type="text" name="editora" value={livro.editora} onChange={handleChanges} />
            </div> 
            <div className='form-group'>
              <button type="submit" >Atualizar Livro</button>  
            </div>                   
          </form>
          </div>        
    </div>
  </>)
  
}

export default LivrosEdicao