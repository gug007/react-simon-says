import  { INIT_MOVE } from '../constants'

const initialState = {
  active: 0,
  items: [
    {id: 1, color: 'blue'},
    {id: 2, color: 'red'},
    {id: 3, color: 'yellow'},
    {id: 4, color: 'green'}
  ]
}

export default function board(state = initialState, action) {
  switch (action.type) {
    case INIT_MOVE:
      return  Object.assign({}, state, { active: action.active })
    default:
      return state
  }
}
