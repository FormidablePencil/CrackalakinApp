import { NEW_GAME, ACTION_TEST_123, COUNTING_DOWN_SECONDS, ROUND_OVER } from "../actionsTypes/types"
import { addToTimeLogic } from "../pureFunctions/logicMatchingGame"

const initialState = 0

export const secondsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ACTION_TEST_123:
         return state
      case NEW_GAME:
         return 300
      case COUNTING_DOWN_SECONDS:
         return state - 1
      case ROUND_OVER:
         return addToTimeLogic(state)
      default:
         return state
   }
}

export default secondsReducer
      // return addToTimeLogic(state)