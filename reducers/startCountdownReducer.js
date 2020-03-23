import { NEW_GAME, DECREMENTING_COUNTDOWN, TURN_OFF } from "../actionsTypes/types"

const initialState = 0

export const startCountdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return 3
    case DECREMENTING_COUNTDOWN:
      return state - 1
      case TURN_OFF:
        return -1
    default:
      return state
  }
}

export default startCountdownReducer