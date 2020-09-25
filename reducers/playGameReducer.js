import { NEW_GAME, GAME_OVER, ROUND_OVER } from "../actionsTypes/types"

const initialState = false

export const playGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_OVER:
      return false
    case NEW_GAME:
    case ROUND_OVER:
      return true
    default:
      return state
  }
}

export default playGameReducer