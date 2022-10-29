import React from 'react'
import {AppContext} from '../App'

function Letter({letterPos, attemptValue}) {
    const {board} = React.useContext(AppContext)
    const letter = board[attemptValue][letterPos]
  return (
    <div className="letter">{letter}</div>
  )
}

export default Letter