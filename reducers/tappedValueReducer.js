import { SET_TAPPED, CORRECT_MATCH, INCORRECT_MATCH, NEW_GAME } from "../actionsTypes/types"

const initialState = ''

export const tappedValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case CORRECT_MATCH:
    case INCORRECT_MATCH:
    case NEW_GAME:
      return ''
    case SET_TAPPED:
      state = action.payload
      return state
    default:
      return state
  }
}