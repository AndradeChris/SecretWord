import React from 'react'
import Button from '../../atomos/Button'
import Instrucoes from '../../atomos/Instrucoes'
import Title from '../../atomos/Title'
import './index.css'

const Game = ({endGame}) => {
  return (
    <div className='container'>
        <Title/>
        <p className='points'>
          <span>Pontos</span>
        </p>
        <h3 className='category-tip'>
          Categoria da palavra: <span className='category-word'>categoria</span>
        </h3>
        <div className='wrong-letters-and-attemps'>
        <p className='attemps'>Tentativas restantes</p>
          <p className='wrong-letters'>Letras erradas:</p>
        </div>
        <div className="letter-game-container">
          <span className='letter-game-card'>A</span>
          <span className="letter-game-card-empty"></span>
        </div>
        <div className='input-letters-container'>
          <form>
            <input type='text' className='letter-input' maxLength={1} required/>
            <button>Jogar</button>
          </form>
        </div>
        <Button funcGame={endGame}>terminar</Button>  
    </div>
  )
}

export default Game