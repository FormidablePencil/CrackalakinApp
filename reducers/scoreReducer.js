import { ACTION_TEST_123, CORRECT_MATCH, GAME_OVER } from '../actionsTypes/types'

const initialState = 0

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case CORRECT_MATCH:
      if (state < 100) {
        return Math.floor(state + 10)
      } else if (state >= 100) {
        return Math.floor(state * 1.2)
      }
    case GAME_OVER:
      return 0
    default:
      return state
  }
}
