import React, { useContext } from 'react'
import { AppContext } from '../App';

const Keys = ({keyVal, isBigKey, isLetterDisabled}) => {
    const {onDeleteKey, onEnterKey, onSelectKey} = useContext(AppContext);
    const handleOnClick = () => {
        if (keyVal === 'ENTER') {
            onEnterKey();
        } else if (keyVal === 'DELETE') {
            onDeleteKey();
        } else {
            onSelectKey(keyVal);
        }
    }
  return (
    <div className='key' id={isBigKey ? 'big' : isLetterDisabled ? 'disabled' : ''} onClick={handleOnClick}>{keyVal}</div>
  );
}

export default Keys;