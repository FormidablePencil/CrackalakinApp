import { INCREMENT } from '../actionsTypes/types'

export const scoreReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state < 100) {
        return Math.floor(state + 10)
      } else if (state >= 100) {
        return Math.floor(state * 1.2)
      }
    default:
      return state
  }
}
