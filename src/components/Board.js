import React from 'react'
import Letter from './Letter';

const Board = () => {
  return (
    <div className='board'>
        <div className='row'>
            <Letter index={0} attempts={0} />
            <Letter index={1} attempts={0} />
            <Letter index={2} attempts={0} />
            <Letter index={3} attempts={0} />
            <Letter index={4} attempts={0} />
        </div>
        <div className='row'>
            <Letter index={0} attempts={1} />
            <Letter index={1} attempts={1} />
            <Letter index={2} attempts={1} />
            <Letter index={3} attempts={1} />
            <Letter index={4} attempts={1} />
        </div>
        <div className='row'>
            <Letter index={0} attempts={2} />
            <Letter index={1} attempts={2} />
            <Letter index={2} attempts={2} />
            <Letter index={3} attempts={2} />
            <Letter index={4} attempts={2} />
        </div>
        <div className='row'>
            <Letter index={0} attempts={3} />
            <Letter index={1} attempts={3} />
            <Letter index={2} attempts={3} />
            <Letter index={3} attempts={3} />
            <Letter index={4} attempts={3} />
        </div>
        <div className='row'>
            <Letter index={0} attempts={4} />
            <Letter index={1} attempts={4} />
            <Letter index={2} attempts={4} />
            <Letter index={3} attempts={4} />
            <Letter index={4} attempts={4} />
        </div>
        <div className='row'>
            <Letter index={0} attempts={5} />
            <Letter index={1} attempts={5} />
            <Letter index={2} attempts={5} />
            <Letter index={3} attempts={5} />
            <Letter index={4} attempts={5} />
        </div>
    </div>
  )
}

export default Board;