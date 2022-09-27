import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';

const Letter = ({index, attempts}) => {
    const {board, correctWord, setDisabledLetters} = useContext(AppContext);
    const letter = board[attempts][index];
    const correct = correctWord.toUpperCase()[index] === letter;
    const almost = !correct && letter !== '' && correctWord.toUpperCase().includes(letter);
    const letterState = correct ? 'correct' : almost ? 'almost' : '';
    
    useEffect(() => {
      if (letter !== '' && !correct && !almost){
        setDisabledLetters((prev) => [...prev, letter]);
      }
    }, [letter]);
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter;