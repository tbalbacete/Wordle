import React from 'react'
import './App.css';
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import {createContext, useState} from 'react'
import { boardDefault } from './Words'

export const AppContext = React.createContext()

function App() {
  const [board, setBoard] = React.useState(boardDefault)
  const [currAttempt, setCurrentAttempt] = React.useState({attempt: 0, letterPos: 0})
  return ( 
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, currAttempt, setCurrentAttempt}}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App;
