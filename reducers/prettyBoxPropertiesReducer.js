import { resetPrettyBoxProperties, resetONLYPressible, generateArrayOfNumbers } from '../pureFunctions/logicMatchingGame'
import { NEW_GAME, CHANGE_BOX_TO_UNPRESSABLE, MAKE_ALL_ELEMENT_PRESSABLE, SET_PAIR_OF_SELECTED_ELEMENTS_INVISIBLE, CORRECT_MATCH, ROUND_OVER, FIRST_ELEMENT_SELECTED, GAME_OVER } from '../actionsTypes/types'

const initialState = resetPrettyBoxProperties() // put this function inline and turn it into functurs, likely will use foorEach

export const prettyBoxPropertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOX_TO_UNPRESSABLE:
      return state[action.payload].pressable = false
    case NEW_GAME:
      return resetPrettyBoxProperties()
    case MAKE_ALL_ELEMENT_PRESSABLE:
      state.map(item => item.pressable = true)
      return state
    case CORRECT_MATCH:
      state[action.secondMatchingBox].visible = false
      state[action.firstMatchingBox].visible = false
      return state
    case FIRST_ELEMENT_SELECTED:
      state[action.payload].pressable = false
      return state
    case NEW_GAME:
    case ROUND_OVER:
      state = resetPrettyBoxProperties()
    case GAME_OVER:
      return state.map(item => item.pressable = true)
    default:
      return state
  }
}