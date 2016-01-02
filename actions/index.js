import * as types from '../constants'

export function initNewMove(active) {
    return { type: types.INIT_MOVE, active }
}


export function initMove(active) {
    return (dispatch, getState) => {
        return dispatch(initNewMove(active));
    };
}



export function updateMoves(moves) {
    return { type: types.UPDATE_MOVES, moves }
}

export function changePlayer(user) {
    return { type: types.CHANGE_PLAYER, user }
}

export function updateSpeed(speed) {
    return { type: types.UPDATE_SPEED, speed }
}

export function newGame() {
    return { type: types.NEW_GAME }
}
export function addMove(move) {
    return { type: types.ADD_MOVE, move }
}
export function incrementLevel() {
    return { type: types.INCREMENT_LEVEL }
}
export function gameOver() {
    return { type: types.OVER_GAME }
}
