import { RESET, SET_TAPPED } from "../actionsTypes/types"

export const tappedValueReducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return  
    case SET_TAPPED:
      state = action.payload
      return  state
    default:
      return state
  }
}