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

  //Stages Game
  const stages = [
    {id: 1, name: 'start'},
    {id: 2, name: 'game'},
    {id: 3, name: 'end'}
  ]

  //State actual stage
  const[actualStage, setActualStage] = useState(stages[0].name);

  //State  import words list
  const[importWordsList, setImportWordsList] = useState(wordsList);

  //States category, words, words letters
  const[category, setCategory] = useState();
  const[words, setWords] = useState();
  const[letters, setLetters] = useState();
 
  //Function get category and word
  const getCategoryAndWord = () => {
    const allCategorys = Object.keys(importWordsList);
    const randomCategory = allCategorys[Math.floor(Math.random() * allCategorys.length)];
    const randomWords = importWordsList[randomCategory][Math.floor(Math.random() * importWordsList[randomCategory].length)];
    return {randomCategory, randomWords};
  }

  //Function for starting game
  const startGame = () =>{
    setActualStage(stages[1].name);

    //Return category and word funcition
    const {randomCategory, randomWords} = getCategoryAndWord();

    setCategory(randomCategory);
    setWords(randomWords);  
    const lowerLetters = randomWords.toLowerCase().split('');  
    setLetters(lowerLetters);
  }
  //function for game over
  const endGame = () =>{
    setActualStage(stages[2].name);
  }
  //function for reset game
  const resetGame = () =>{
    setActualStage(stages[0].name);
  }

  return (
    <div className="App">
      { actualStage === 'start' && <FirstPage startGame={startGame} /> }
      { actualStage === 'game' && <Game endGame={endGame} /> }
      { actualStage === 'end' && <GameOver resetGame={resetGame} /> }
    </div>
  );
}

export default App;
