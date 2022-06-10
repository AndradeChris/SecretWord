import { useState } from 'react'
import './index.css'

const Instrucoes = () => {

  const [displayValue, setDisplayValue] = useState(true)

  const mostrarInstrucoes = () => {
      setDisplayValue(!displayValue)
  }

  const [instrucoes] = useState([
    {id: 1, texto: 'O jogo consiste em um jogo de palavras, onde você deve adivinhar as palavras que estão escondidas no tabuleiro'},
    {id: 2, texto: 'Para começar, clique no botão "Iniciar" e uma categoria sera escolhida aleatoriamente'},
    {id: 3, texto: 'Você deve adivinhar as palavras que estão escondidas no tabuleiro'},
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