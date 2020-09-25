import { COMMIT_DATA } from "../actionsTypes/types"

const initialState = { highscore: 0, highestround: 0, score: 0, round: 0 }

export const savedDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMIT_DATA:
      console.log(COMMIT_DATA, action.payload)
      return action.payload
    default:
      return state
  }
}

export default savedDataReducer