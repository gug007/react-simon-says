import { combineReducers } from 'redux'
import  { INIT_MOVE, UPDATE_MOVES, CHANGE_PLAYER, NEW_GAME, ADD_MOVE, INCREMENT_LEVEL, OVER_GAME, UPDATE_SPEED } from '../constants'

const initialState = {
        active: 0,
        items: [
            {id: 1, color: 'blue'},
            {id: 2, color: 'red'},
            {id: 3, color: 'yellow'},
            {id: 4, color: 'green'}
        ]
}


function board(state = initialState, action) {
    switch (action.type) {
        case INIT_MOVE:
            return  Object.assign({}, state, { active: action.active })
        default:
            return state
    }
}

const initialStateGame = {
    user: false,
    moves: [],
    pressedMoves: [],
    status: '',
    level: 0,
    speed: 1.5
}

function game(state = initialStateGame, action) {
    switch (action.type) {
        case NEW_GAME:
            return  Object.assign({}, state, { user: false,
                moves: [],
                pressedMoves: [],
                status: '',
                level: 0, })
        case OVER_GAME:
            return  Object.assign({}, state, { user: false,
                moves: [],
                pressedMoves: [],
                status: 'Game over',
                level: 0, })
        case UPDATE_SPEED:
            return  Object.assign({}, state, { speed: action.speed })
        case ADD_MOVE:
            let pressedMoves = state.pressedMoves;
            pressedMoves.push(parseInt(action.move, 10))
            return  Object.assign({}, state, { pressedMoves: pressedMoves })
        case UPDATE_MOVES:
            return  Object.assign({}, state, { user: false, moves: action.moves, level: ++state.level, pressedMoves: [] })
        case INCREMENT_LEVEL:
            return  Object.assign({}, state, { level: ++state.level })
        case CHANGE_PLAYER:
            return  Object.assign({}, state, { user: action.user })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    board,
    game
})

export default rootReducer