import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '#000',
  }
  
  const [categorias, setCategoria] = useState([])
  const [Values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor){
    setValues({
      ...Values,
      [chave]: valor
    })
  }

  function hundlerChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target
    setValue(
    getAttribute('name'), 
    value
    )
  }

  return (
    <PageDefault>
      <h1>cadastro de Categoria : {Values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault()
        setCategoria([
          ...categorias,
          Values
        ])

        setValues(valoresIniciais)
      }}>
        <div>
            Nome da Categoria:
          <label>
            <input
              type="text"
              value={Values.nome}
              name='nome'
              onChange={hundlerChange}
            />
          </label>
        </div>
        <div>
          descrição:
          <label>
            <input
              type="text"
              value={Values.descrição}
              name='descrição'
              onChange={hundlerChange}
            />
          </label>
        </div>
        <div>
            cor:
          <label>
            <input
              type="color"
              value={Values.cor}
              name='cor'
              onChange={hundlerChange}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/" >
        ir pra home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria