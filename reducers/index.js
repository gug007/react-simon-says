import { combineReducers } from 'redux'
import board from './board'
import game from './game'

const rootReducer = combineReducers({
  board,
  game
})

export default rootReducer