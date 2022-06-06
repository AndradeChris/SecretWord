import React from 'react'
import Button from '../../atomos/Button'
import Instrucoes from '../../atomos/Instrucoes'
import Title from '../../atomos/Title'

const Game = ({endGame}) => {
  return (
    <div>
        <Title />
        <Instrucoes />
        <Button funcGame={endGame}>Finalizar</Button>   
    </div>
  )
}

export default Game