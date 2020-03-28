import { generateArrayOfNumbers } from '../pureFunctions/logicMatchingGame'
import { NEW_GAME, DECREMENTING_COUNTDOWN, ROUND_OVER } from '../actionsTypes/types'

const initalState = generateArrayOfNumbers()

export const pairOfNumbersReducer = (state = initalState, action) => {
  switch (action.type) {
    case ROUND_OVER:
    case NEW_GAME:
    case DECREMENTING_COUNTDOWN:
      return generateArrayOfNumbers()
    default:
      return state
  }
}

