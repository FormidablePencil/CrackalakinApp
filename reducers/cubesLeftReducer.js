import { DELETE_VALUE_IN_STATE, DECREMENT, RESET } from "../actionsTypes/types"

export const cubesLeftReducer = (state, action) => {
  switch (action.type) {
    case DECREMENT:
      return state - 2
    case RESET:
      return 12
    default:
      return state
  }
}