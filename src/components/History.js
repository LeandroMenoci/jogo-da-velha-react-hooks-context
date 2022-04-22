import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { GameContext } from '../contexts/GameContext'

export default function History() {
  const { history, setHistory, setSquares, setWhoIsWinner, setIsXNext } = useContext(GameContext)

  function handleClick(index) {
    const newHistory = [...history]
    newHistory.splice(index, Number.MAX_SAFE_INTEGER)
    setHistory(newHistory)


    setSquares(history[index].squares)
    setWhoIsWinner(history[index].isNext)
    setWhoIsWinner(history[index].whoIsWinner)
  }


  return (
    <div>
      {history.map((data, index) => (
        <div key={uuidv4()} className="history">
          <button
            type='button'
            onClick={() => handleClick(index)}
          >
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </div>
  )
}