import { generateArrayOfNumbers } from '../pureFunctions/logicMatchingGame'
import { RESET } from '../actionsTypes/types'

export const matchingGameReducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return generateArrayOfNumbers()
    default:
      return state
  }
}