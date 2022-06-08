import React from 'react'
import Button from '../../atomos/Button'
import Instrucoes from '../../atomos/Instrucoes'
import Title from '../../atomos/Title'
import './index.css'

const Game = ({endGame}) => {
  return (
    <div className='container'>
        <Title customTitleProp='min-title'/>
        <p className='points'>
          <span>Pontos</span>
          <p className='attemps'>Tentativas restantes</p>
        </p>
        <div className="letter-game-container">
          <div className="category-container">
            <h3 className='category-tip'>
              Categoria: <span className='category-word'>categoria</span>
            </h3>
          </div>
          <div className="letter-container">
            <span className='letter-game-card'>A</span>
            <span className="letter-game-card-empty"></span>
          </div>
          <div className='wrong-letters-container'>       
            <p className='wrong-letters'>Letras erradas:</p>
          </div>
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