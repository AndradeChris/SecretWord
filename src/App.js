//CSS
import './App.css';

//COMPONENTS
import FirstPage from './components/organismos/FirstPage';
import Game from './components/organismos/Game';
import GameOver from './components/organismos/GameOver';

//IMPORTS
import { useState, useCallback, useEffect, useMemo} from 'react';
import { wordsList } from './data/words';

function App() {

  //Stages Game
  const stages = useMemo(() => [
    {id: 1, name: 'start'},
    {id: 2, name: 'game'},
    {id: 3, name: 'end'}
  ], [])

  const[actualStage, setActualStage] = useState(stages[0].name);

  const[importWordsList] = useState(wordsList);

  const[category, setCategory] = useState();
  const[words, setWords] = useState();
  const[letters, setLetters] = useState();
  const[guessedLetters, setGuessedLetters] = useState([]);
  const[wrongLetters, setWrongLetters] = useState([]);
  const [quantityChances] = useState(5);
  const[chances, setChances] = useState(quantityChances);
  const[score, setScore] = useState(0);
 
  //Function get category and word
  const getCategoryAndWord = useCallback(() => {
    const allCategorys = Object.keys(importWordsList);
    const randomCategory = allCategorys[Math.floor(Math.random() * allCategorys.length)];
    const randomWords = importWordsList[randomCategory][Math.floor(Math.random() * importWordsList[randomCategory].length)];
    return {randomCategory, randomWords};
  }, [importWordsList]);

  //Function for starting game
  const startGame = useCallback(() =>{
    clearAllStates()
    setActualStage(stages[1].name);

    //Return category and word funcition
    const {randomCategory, randomWords} = getCategoryAndWord();

    setCategory(randomCategory);
    setWords(randomWords);  
    const lowerLetters = randomWords.toLowerCase().split('');  
    setLetters(lowerLetters);
  },[getCategoryAndWord, stages])
  //Function verify letter
  const verifyLetter = (inputLetter) => {
    const lowerInputLetter = inputLetter.toLowerCase();

    if( guessedLetters.includes(lowerInputLetter) || wrongLetters.includes(lowerInputLetter) ){
      return;
    }

    if(letters.includes(lowerInputLetter)){
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, lowerInputLetter]);
  } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, lowerInputLetter]);
      setChances((actualChances) => actualChances - 1);
  }}

  const clearAllStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if(chances <= 0){
      //clear all states
      clearAllStates();

      setActualStage(stages[2].name)
  }}, [chances, stages])

  useEffect(() => {
    const uniquesLetters = [...new Set(letters)];

    if(uniquesLetters.length === guessedLetters.length){
      setScore((actualScore) => actualScore += 100);
      startGame()
    }
  }, [guessedLetters, letters, startGame])

  //function for game over
  const endGame = () =>{
    setActualStage(stages[2].name);
  }
  //function for reset game
  const resetGame = () =>{
    setScore(0);
    setChances(quantityChances);

    setActualStage(stages[0].name);
  }

  return (
    <div className="App">
      { actualStage === 'start' && <FirstPage startGame={startGame} /> }
      { actualStage === 'game' && <Game endGame={endGame} verifyLetter={verifyLetter} category={category} word={words} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} chances={chances} score={score}/> }
      { actualStage === 'end' && <GameOver resetGame={resetGame} score={score}/> }
    </div>
  );
}

export default App;
