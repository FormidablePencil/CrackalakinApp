import { DELETE_VALUE_IN_STATE, DECREMENT, NEW_GAME, CORRECT_MATCH, ROUND_OVER } from "../actionsTypes/types"

// const initialState = {
//   reduxArray: [{ 0: 'hey' }, { 1: 'yo' }, { 2: 'brosski' }] //@ Found this way of data structuring most effective casue you can use the benifits of objects and legereging the power of functors
// }

// const reduxReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_VALUE_IN_STATE:
//       console.log(action.payload)
//       return {
//         ...state,
//         ...state.reduxArray.filter(item => Object.keys(item) !== action.payload)
//       }
//     default:
//       return state
//   }
// }
// ...state.reduxArray[action.payload] = 'suckit' //@ modfiy
//..delete state.reduxArray[action.payload] //  @ deleteting
//? adding? 
// export default reduxReducer

const initialState = 12

const cubesLeftReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
    case CORRECT_MATCH:
      return state - 2
    case NEW_GAME:
    case ROUND_OVER:
      return 12
    default:
      return state
  }
}

export default cubesLeftReducer