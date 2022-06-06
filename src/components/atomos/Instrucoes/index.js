import { useState } from 'react'
import './index.css'

const Instrucoes = () => {

  const [displayValue, setDisplayValue] = useState(true)

  const mostrarInstrucoes = () => {
      setDisplayValue(!displayValue)
  }

  return (
    <>
        <p className='instrucoes' onClick={mostrarInstrucoes}>Instruções</p>
        <ul className={displayValue ? 'disabled' : 'active'}>
            <li>O jogo consiste em um tabuleiro de xadrez com 64 casas.</li>
        </ul>
    </>
  )
}

export default Instrucoes