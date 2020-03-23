import { createStore, combineReducers, applyMiddleware } from 'redux'
import { pairOfNumbersReducer } from './reducers/pairOfNumbersReducer'
import { tappedValueReducer } from './reducers/tappedValueReducer'
import { scoreReducer } from './reducers/scoreReducer'
import { prettyBoxPropertiesReducer } from './reducers/prettyBoxPropertiesReducer'
import playGameReducer from './reducers/playGameReducer'
import roundReducer from './reducers/roundReducer'
import secondsReducer from './reducers/secondsReducer'
import startCountdownReducer from './reducers/startCountdownReducer'
import cubesLeftReducer from './reducers/cubesLeftReducer'
import thunk from 'redux-thunk'
import savedDataReducer from './reducers/savedDataReducer'

const rootReducer = combineReducers({ //here we assign the reducer here and the reducer iteslf holds the initialStste 
   pairOfNumbers: pairOfNumbersReducer,
   tappedValue: tappedValueReducer,
   score: scoreReducer,
   cubesLeft: cubesLeftReducer,
   prettyBoxProperties: prettyBoxPropertiesReducer,
   playGame: playGameReducer,
   round: roundReducer,
   seconds: secondsReducer,
   startCountdown: startCountdownReducer,
   savedData: savedDataReducer
})

const initialState = {}

const middleware = [thunk] //~ magical thing. Without it I couldn't implement my matchingGame all that well
//Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
