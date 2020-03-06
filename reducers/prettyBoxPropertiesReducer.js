import { resetPrettyBoxProperties, resetONLYPressible } from '../pureFunctions/logicMatchingGame'
import { RESET, CHANGE_BOX_TO_UNPRESSABLE, RESET_ONLY_PRESSIBLE_PROPERTY_OF_ALL_BOXES, SET_PAIR_OF_SELECTED_ELEMENTS_INVISIBLE } from '../actionsTypes/types'

export const prettyBoxPropertiesReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_BOX_TO_UNPRESSABLE:
      state[action.payload].pressable = false
      return state
    case RESET:
      return resetPrettyBoxProperties()
    case RESET_ONLY_PRESSIBLE_PROPERTY_OF_ALL_BOXES:
      for (let i = 0; i < 12; i++) {
        state[i].pressable = true
      }
      return state
    case RESET:
      for (let i = 0; i < 12; i++) {
        state[i].pressable = true
        state[i].visible = true
      }
      return state
    case SET_PAIR_OF_SELECTED_ELEMENTS_INVISIBLE:
      state[action.payload.firstMatchingBox].visible = false
      state[action.payload.secondMatchingBox].visible = false
      return state
    default:
      return state
  }
}