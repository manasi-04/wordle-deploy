import React, { useContext } from 'react'
import { AppContext } from '../App'

const GameOver = () => {
    const {gameState, correctWord, currAttempts} = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>
            {gameState.guessedWord ? 'You correctly guessed' : 'You failed !!'}
        </h3>
        <h1>
            correct Word: {correctWord}
        </h1>
        {gameState.guessedWord && 
            (<h3>
                You guessed in {currAttempts} attempts.
            </h3>
            )}
    </div>
  );
}

export default GameOver;