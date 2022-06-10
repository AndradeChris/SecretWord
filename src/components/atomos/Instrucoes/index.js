import { useState } from 'react'
import './index.css'

const Instrucoes = () => {

  const [displayValue, setDisplayValue] = useState(true)

  const mostrarInstrucoes = () => {
      setDisplayValue(!displayValue)
  }

  const [instrucoes] = useState([
    {id: 1, texto: 'Para começar, clique no botão "Começar" e uma categoria sera escolhida aleatoriamente'},
    {id: 2, texto: 'Você deve adivinhar as palavras que estão escondidas no tabuleiro'},
    {id: 3, texto: 'Você terá 5 chances para adivinhar a palavra'},
    {id: 4, texto: 'Para ser validada, as letras devem possuir acento quando necessário'},
  ])

  return (
    <>
        <p className='instrucoes' onClick={mostrarInstrucoes}>Instruções</p>
        <ul className={displayValue ? 'disabled' : 'active'}>
            {instrucoes.map((element, index) => (
                <li key={index}>{element.texto}</li>
            ))}
        </ul>
    </>
  )
}

export default Instrucoes