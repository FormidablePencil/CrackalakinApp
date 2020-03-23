import { NEW_GAME, ROUND_OVER, GAME_OVER } from "../actionsTypes/types"

const initialState = 0

export const roundReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return 1
    case ROUND_OVER:
      return state + 1
    case GAME_OVER:
      return 0
    default:
      return state
  }
}


export default roundReducer