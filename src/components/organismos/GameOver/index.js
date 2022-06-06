import React from 'react'
import Button from '../../atomos/Button'
import Instrucoes from '../../atomos/Instrucoes'
import Title from '../../atomos/Title'

const GameOver = ({resetGame}) => {
  return (
    <div>
        <Title />
        <Instrucoes />
        <Button funcGame={resetGame}>Resetar</Button>   
    </div>
  )
}

export default GameOver