import React, { createContext, useState, useReducer } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import GameMenu from '../screens/GameMenuScreen'
import { matchingGameReducer } from '../reducers/matchingGameReducer'
import { tappedValueReducer } from '../reducers/tappedValueReducer'
import { scoreReducer } from '../reducers/scoreReducer'
import { cubesLeftReducer } from '../reducers/cubesLeftReducer'
import { prettyBoxPropertiesReducer } from '../reducers/prettyBoxPropertiesReducer'
import MatchingGameScreen from '../screens/MatchingGameScreen'
import GameOverScreen from '../screens/GameOverScreen'
import GameMenuScreen from '../screens/GameMenuScreen'
import { generateArrayOfNumbers, resetPrettyBoxProperties } from '../pureFunctions/logicMatchingGame'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export const MatchingGameContext = createContext()

export function ContextMatchingGameProvider() { //~ we are creating reducers for all states. I just want to clean my codebase and to learn the way to arange my code
  const [matchingGame, dispatchMatchingGame] = useReducer(matchingGameReducer, generateArrayOfNumbers())
  const [tappedValue, dispatchTappedValue] = useReducer(tappedValueReducer)
  const [score, dispatchScore] = useReducer(scoreReducer, 0)
  const [cubesLeft, dispatchCubesLeft] = useReducer(cubesLeftReducer, 0)
  const [prettyBoxProperties, dispatchPrettyBoxProperties] = useReducer(prettyBoxPropertiesReducer, resetPrettyBoxProperties())
  const [playGame, setPlayGame] = useState(false)

  const [round, setRound] = useState(0)
  const [seconds, setSeconds] = useState(30)
  const [startCountdown, setStartCountdown] = useState(3)
  const [differentScreen, setDifferentScreen] = useState(false)
  const [toggleSettings, setToggleSettings] = useState(false)

  return (
    <NavigationContainer>
      <MatchingGameContext.Provider value={{
        cubesLeft, dispatchCubesLeft,
        score, dispatchScore,
        matchingGame, dispatchMatchingGame,
        prettyBoxProperties, dispatchPrettyBoxProperties,
        tappedValue, dispatchTappedValue,
        playGame, setPlayGame,
        seconds, setSeconds,
        playGame, setPlayGame,
        round, setRound,
        startCountdown, setStartCountdown,
        differentScreen, setDifferentScreen,
        toggleSettings, setToggleSettings
      }}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='GameOver' component={GameOverScreen} />
          <Stack.Screen name='GameMenu' component={GameMenuScreen} />
          <Stack.Screen name='Game' component={MatchingGameScreen} />
        </Stack.Navigator>
      </MatchingGameContext.Provider>
    </NavigationContainer>
  )
}
{/* //* simply add GameMenu.js here and add set the navigation methods in two diffrent places. Set if playGame === true then navigate to the screen... But make it do so instantly... */ }