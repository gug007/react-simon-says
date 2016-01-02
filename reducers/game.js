import  { UPDATE_MOVES, CHANGE_PLAYER, NEW_GAME, ADD_MOVE, INCREMENT_LEVEL, OVER_GAME, UPDATE_SPEED } from '../constants'

const initialStateGame = {
    user: false,
    moves: [],
    pressedMoves: [],
    status: '',
    level: 0,
    speed: 1.5
}

export default function game(state = initialStateGame, action) {
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