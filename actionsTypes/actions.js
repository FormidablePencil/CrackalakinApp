import {
   ACTION_TEST_123,
   CORRECT_MATCH,
   INCORRECT_MATCH,
   FIRST_ELEMENT_SELECTED,
   NEW_GAME,
   DECREMENT_COUNTDOWN,
   DECREMENTING_COUNTDOWN,
   SET_TAPPED,
   MATCHING_ELEMENTS_DISAPPEAR,
   MAKE_ALL_ELEMENT_PRESSABLE,
   GAME_OVER,
   COMMIT_DATA
} from "./types"

//~ I am trying to update many states from one place... It may be benifitial right now to read the the docs..
//~ If redux doesn't rerender every component that is associated with the state then keeping one state would be just fine.


//@ In theory this should fire all the reducers what have hold that corresponding type

export const matchingGameAction = ({ value, whatBox, prettyBoxProperties, tappedValue, pairOfNumbers }) => dispatch => {
   const evaluatedPlayerInput = evaluatePlayerInput(value, whatBox, prettyBoxProperties, tappedValue)
   switch (evaluatedPlayerInput) {
      case 'correct':
         const firstMatchingBox = pairOfNumbers.indexOf(value)
         const secondMatchingBox = pairOfNumbers.lastIndexOf(value)
         dispatch({
            type: CORRECT_MATCH,
            payload: value,
            firstMatchingBox: firstMatchingBox,
            secondMatchingBox: secondMatchingBox,
         })
         break
      case 'incorrect':
         dispatch({ type: INCORRECT_MATCH })
         dispatch({ type: MAKE_ALL_ELEMENT_PRESSABLE })
         break
      case 'firstBoxSelected':
         dispatch({ type: FIRST_ELEMENT_SELECTED, payload: whatBox }) //change to be an array of items instaed...
         dispatch({ type: SET_TAPPED, payload: value })
         break
      case 'element already selected':
         break
   }
}

function evaluatePlayerInput(value, whatBox, prettyBoxProperties, tappedValue) { //@ I think this is what you'll call a pure function 
   switch (true) {
      case prettyBoxProperties[whatBox].pressable === false:
         return 'element already selected'
      case typeof tappedValue === 'number' && value === tappedValue:
         return 'correct'
      case typeof tappedValue === 'number' && value !== tappedValue:
         return 'incorrect'
      case !tappedValue:
         return 'firstBoxSelected'
      default:
   }
}

export const endGameAndCommitData = ({ score, round, savedData }) => async dispatch => {
   dispatch({ type: GAME_OVER })
   savedData.highscore = score > savedData.highscore ? score : savedData.highscore
   savedData.highestround = round > savedData.highestround ? round : savedData.highestround
   savedData.score = score
   savedData.round = round
   dispatch({ type: COMMIT_DATA, payload: savedData })
}
