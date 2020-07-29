import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria() {
  const [categorias, setCategoria] = useState(['teste'])
  const valoresiniciais = {
    nome: 'categoria inicial',
    descriçao: 'descrição inicial',
    cor: '#bbb',
  }
  const [Values, setValues] = useState(valoresiniciais)
  
  function setValue(chave, valor){
    setValues({
      ...Values,
      [chave]: valor,
    })
  }

  function hundlerChange(infoEvents) {
    setValues(infoEvents.target.getAttribute('name'), 
    infoEvents.target.value
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
            descriçao:
          <label>
            <textarea
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
        {categorias.map((categorias, indice) => {
          return (
            <li key={`${categorias}${indice}`}>
              {categorias.nome}
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