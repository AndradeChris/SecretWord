import React from 'react'
import Button from '../../atomos/Button'
import Instrucoes from '../../atomos/Instrucoes'
import Title from '../../atomos/Title'
import './index.css'

const Game = ({endGame, category, words, letters, guessedLetters, wrongLetters, chances, score}) => {
  return (
    <div className='container'>
        <Title customTitleProp='min-title'/>
        <p className='points'>
          <span>{score}</span>
          <p className='attemps'>Tentativas restantes: {chances}</p>
        </p>
        <div className="letter-game-container">
          <div className="category-container">
            <h3 className='category-tip'>
              Categoria: <span className='category-word'>{category}</span>
            </h3>
          </div>
          <div className="letter-container">
            {letters.map((letter, index) => (
            guessedLetters.includes(letter) ? 
            <span className='letter-game-card' key={index}>{letter}</span> : 
            <span className="letter-game-card-empty"></span> 
            ))}
          </div>
          <div className='wrong-letters-container'> 
            <span className='wrong-letters'>Letras erradas:</span>  
            {wrongLetters.map((letter, index) => (
            <span className='wrong-letters'> {letter} </span>))}                 
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