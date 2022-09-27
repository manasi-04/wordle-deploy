import React, { useCallback, useContext, useEffect } from 'react'
import { AppContext } from '../App';
import Keys from './Keys';

const keyboardLine1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keyboardLine2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keyboardLine3 = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard = () => {
    const {onEnterKey, onSelectKey, onDeleteKey, disabledLetters} = useContext(AppContext);
    const handleKeyboardEvent = useCallback((event) => {
        if(event.key === 'Enter') {
            onEnterKey();
        } else if (event.key === 'Backspace') {
            onDeleteKey();
        } else {
            keyboardLine1.forEach((key) => {
                if (event.key.toLowerCase() === key.toLocaleLowerCase()) {
                    onSelectKey(key);
                }
            });
            keyboardLine2.forEach((key) => {
                if (event.key.toLowerCase() === key.toLocaleLowerCase()) {
                    onSelectKey(key);
                }
            });
            keyboardLine3.forEach((key) => {
                if (event.key.toLowerCase() === key.toLocaleLowerCase()) {
                    onSelectKey(key);
                }
            });
        }
    }, );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboardEvent);
        return () => {
            document.removeEventListener('keydown', handleKeyboardEvent);
        }
    }, [handleKeyboardEvent]);
    
  return (
    <div className='keyboard' onKeyDown={handleKeyboardEvent}>
        <div className='line1'>{
            keyboardLine1.map(key => {
                return (
                    <Keys key={key} keyVal={key} isLetterDisabled={disabledLetters.includes(key)}/>
                );
            })}
        </div>
        <div className='line2'>{
            keyboardLine2.map(key => {
                return (
                    <Keys key={key} keyVal={key} isLetterDisabled={disabledLetters.includes(key)}/>
                );
            })}
            
        </div>
        <div className='line3'>
            <Keys keyVal={'ENTER'} isBigKey={true}/>
            {
            keyboardLine3.map(key => {
                return (
                    <Keys key={key} keyVal={key} isLetterDisabled={disabledLetters.includes(key)}/>
                );
            })}
            <Keys keyVal={'DELETE'} isBigKey={true}/>
        </div>
    </div>
  )
}

export default Keyboard;