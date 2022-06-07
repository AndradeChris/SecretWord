//CSS
import './App.css';
//COMPONENTS
import FirstPage from './components/organismos/FirstPage';
import Game from './components/organismos/Game';
import GameOver from './components/organismos/GameOver';
//IMPORTS
import { useState, useCallback, useEffect } from 'react';
import { wordsList } from './data/words';

function App() {
  //Stage
  const stagesVar = [
    {id: 1, name: 'start'},
    {id: 2, name: 'game'},
    {id: 3, name: 'end'}
  ]
  //State dos Stages
  const[stage, setStage] = useState(stagesVar[0].name);
  //State dos Palavras
  const[wordsLista, setWordsLista] = useState(wordsList);
  //States words, letters, category
  const[words, setWords] = useState();
  const[letters, setLetters] = useState();
  const[category, setCategory] = useState();
  //Function Pegar Palavra e categoria
  const getWordAndCategory = () => {
    const getCategorys = Object.keys(wordsLista);
    const getCategory = getCategorys[Math.floor(Math.random() * getCategorys.length)];
    const getWords = wordsLista[getCategory][Math.floor(Math.random() * wordsLista[getCategory].length)];
    return {getCategory, getWords};
  }
  //Function para Game
  const startGame = () =>{
    setStage(stagesVar[1].name);
    const {getCategory, getWords} = getWordAndCategory();
    setCategory({getCategory});
    setWords({getWords});
    setLetters(getWords.split(''));
  }
  //function para GameOver
  const endGame = () =>{
    setStage(stagesVar[2].name);
  }
  //function para resetar o jogo
  const resetGame = () =>{
    setStage(stagesVar[0].name);
  }

  return (
    <div className="App">
      { stage === 'start' && <FirstPage startGame={startGame} /> }
      { stage === 'game' && <Game endGame={endGame} /> }
      { stage === 'end' && <GameOver resetGame={resetGame} /> }
    </div>
  );
}

export default App;
