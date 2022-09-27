import { createContext, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import GameOver from './components/GameOver';
import Keyboard from './components/Keyboard';
import { defaultWord, generateWordSet } from './Word';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultWord);
  const [currIndex, setCurrIndex] = useState(0);
  const [currAttempts, setCurrAttempts] = useState(0);
  const [wordListSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameState, setGameState] = useState({gameOver: false, guessedWord: false});
  const [correctWord, setCorrectWord] = useState('');

  useEffect(() => {
    generateWordSet().then(value => {
      setWordSet(value.wordSet);
      setCorrectWord(value.todaysWord);
    })
  }, []);

  const onSelectKey = (keyVal) => {
    if (currIndex === 5) return;
    const updatedValue = [...board];
    updatedValue[currAttempts][currIndex] = keyVal;
    setBoard(updatedValue);
    setCurrIndex(currIndex+1);
  }
  const onDeleteKey = () => {
    if (currIndex === 0) return;
    const updatedValue = [...board];
    updatedValue[currAttempts][currIndex-1] = '';
    setCurrIndex(currIndex-1);
  }
  const onEnterKey = () => {
    if (currIndex <= 4) return;
    let currWord = '';
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempts][i];
    }
    if (wordListSet.has(currWord.toLowerCase())) {
      setCurrAttempts(currAttempts+1);
      setCurrIndex(0);
    } else {
      alert('Word not found!!');
    }

    if (currWord.toLowerCase() === correctWord) {
      setGameState({gameOver: true, guessedWord: true});
      return;
    }
    
    if (currAttempts === 5) {
      setGameState({gameOver: true, guessedWord: false});
    }
  }

  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider value={{board, setBoard, currIndex, setCurrIndex, currAttempts, setCurrAttempts,
                                  onSelectKey, onEnterKey, onDeleteKey, correctWord, disabledLetters, setDisabledLetters,
                                  gameState, setGameState}}>
        <div className='game'>
          <Board />
          {gameState.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
